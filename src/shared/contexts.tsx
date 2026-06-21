import {
  createContext,
  use,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  CityOption,
  ParsedWeatherData,
  UnitSystem,
  Units,
  OpenMeteoData,
} from "../shared/utils";
import { parseWeatherData } from "./weatherParser";

type WeatherAppContextType = {
  units: Units;
  setUnits: (units: Units) => void;

  system: UnitSystem;
  setSystem: (system: UnitSystem) => void;

  rawWeatherData: OpenMeteoData | null;
  setRawWeatherData: (data: OpenMeteoData | null) => void;

  parsedData: ParsedWeatherData;

  selectedCity: CityOption | null;
  setSelectedCity: (city: CityOption | null) => void;

  weatherCity: CityOption | null;
  setWeatherCity: (city: CityOption | null) => void;
};

const defaultUnits: Units = {
  temperature: "celsius",
  windSpeed: "km/h",
  precipitation: "mm",
};

const WeatherAppContext = createContext<WeatherAppContextType | null>(null);

export function WeatherAppProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Units>(defaultUnits);
  const [system, setSystemState] = useState<UnitSystem>("metric");
  const [rawWeatherData, setRawWeatherData] = useState<OpenMeteoData | null>(
    null,
  );
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
  const [weatherCity, setWeatherCity] = useState<CityOption | null>(null);

  useEffect(() => {
    if (
      units.temperature === "celsius" &&
      units.windSpeed === "km/h" &&
      units.precipitation === "mm" &&
      system !== "metric"
    ) {
      setSystem("metric");
    } else if (
      units.temperature === "fahrenheit" &&
      units.windSpeed === "mph" &&
      units.precipitation === "inches" &&
      system !== "imperial"
    ) {
      setSystem("imperial");
    }
  }, [units, system]);

  function setSystem(nextSystem: UnitSystem) {
    setSystemState(nextSystem);

    if (nextSystem !== "metric") {
      setUnits({
        temperature: "fahrenheit",
        windSpeed: "mph",
        precipitation: "inches",
      });
      return;
    }

    setUnits({
      temperature: "celsius",
      windSpeed: "km/h",
      precipitation: "mm",
    });
  }

  const parsedData = useMemo(() => {
    return parseWeatherData(rawWeatherData, weatherCity, units);
  }, [rawWeatherData, weatherCity, units]);

  return (
    <WeatherAppContext
      value={{
        units,
        setUnits,
        system,
        setSystem,
        rawWeatherData,
        setRawWeatherData,
        parsedData,
        selectedCity,
        setSelectedCity,
        weatherCity,
        setWeatherCity,
      }}
    >
      {children}
    </WeatherAppContext>
  );
}

export function useWeatherAppContext() {
  const context = use(WeatherAppContext);

  if (!context) {
    throw new Error(
      "useWeatherAppContext must be used within a WeatherAppProvider",
    );
  }

  return context;
}
