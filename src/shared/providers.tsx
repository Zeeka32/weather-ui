import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { CityOption, UnitSystem, Units, OpenMeteoData } from "./types";
import { parseWeatherData } from "./weatherParser";
import { WeatherAppContext } from "./contexts";

const defaultUnits: Units = {
  temperature: "celsius",
  windSpeed: "km/h",
  precipitation: "mm",
};

export function WeatherAppProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Units>(defaultUnits);
  const [system, setSystemState] = useState<UnitSystem>("metric");
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
  const [weatherCity, setWeatherCity] = useState<CityOption | null>(null);
  const [rawWeatherData, setRawWeatherData] = useState<OpenMeteoData | null>(
    null,
  );

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
