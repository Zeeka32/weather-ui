import { createContext, use } from "react";
import type {
  CityOption,
  ParsedWeatherData,
  UnitSystem,
  Units,
  OpenMeteoData,
} from "./types";

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

export const WeatherAppContext = createContext<WeatherAppContextType | null>(
  null,
);

export function useWeatherAppContext() {
  const context = use(WeatherAppContext);

  if (!context) {
    throw new Error(
      "useWeatherAppContext must be used within a WeatherAppProvider",
    );
  }

  return context;
}
