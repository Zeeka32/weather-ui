import {
  createContext,
  use,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { WeatherIconKey } from "../shared/weatherIcon";

export type CityOption = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country: string;
  admin1?: string;
};

export type Units = {
  temperature: "celsius" | "fahrenheit";
  windSpeed: "km/h" | "mph";
  precipitation: "mm" | "inches";
};

export type UnitSystem = "metric" | "imperial";

type OpenMeteoData = any;

export type TodayWeather = {
  location: string;
  date: string;
  temperature: string;
  feelsLike: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  weatherType: WeatherIconKey;
};

export type DailyForecastItem = {
  date: string;
  day: string;
  low: number;
  high: number;
  weatherType: WeatherIconKey;
};

export type HourlyForecastItem = {
  time: string;
  hour: string;
  temp: number;
  weatherType: WeatherIconKey;
};

export type ParsedWeatherData = {
  today: TodayWeather | null;
  dailyForecast: DailyForecastItem[];
  hourlyForecast: HourlyForecastItem[];
};

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
  }, [units]);

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

function parseWeatherData(
  data: OpenMeteoData | null,
  selectedCity: CityOption | null,
  units: Units,
): ParsedWeatherData {
  if (!data) {
    return {
      today: null,
      dailyForecast: [],
      hourlyForecast: [],
    };
  }

  return {
    today: parseTodayWeather(data, selectedCity, units),
    dailyForecast: parseDailyForecast(data, units),
    hourlyForecast: parseHourlyForecast(data, units),
  };
}

function parseTodayWeather(
  data: OpenMeteoData,
  selectedCity: CityOption | null,
  units: Units,
): TodayWeather {
  const current = data.current;

  return {
    location: selectedCity?.name ?? "Unknown location",
    date: formatDate(current.time),
    temperature: convertTemperature(current.temperature_2m, units.temperature),
    feelsLike: convertTemperature(
      current.apparent_temperature,
      units.temperature,
    ),
    humidity: current.relative_humidity_2m,
    windSpeed: convertWindSpeed(current.wind_speed_10m, units.windSpeed),
    precipitation: convertPrecipitation(
      current.precipitation,
      units.precipitation,
    ),
    weatherType: mapWeatherCodeToIcon(current.weather_code),
  };
}

function parseDailyForecast(
  data: OpenMeteoData,
  units: Units,
): DailyForecastItem[] {
  const daily = data.daily;

  if (!daily) return [];

  return daily.time.map((date: string, index: number) => ({
    date,
    day: formatWeekday(date),
    low: convertTemperature(daily.temperature_2m_min[index], units.temperature),
    high: convertTemperature(
      daily.temperature_2m_max[index],
      units.temperature,
    ),
    weatherType: mapWeatherCodeToIcon(daily.weather_code[index]),
  }));
}

function parseHourlyForecast(
  data: OpenMeteoData,
  units: Units,
): HourlyForecastItem[] {
  const hourly = data.hourly;

  if (!hourly) return [];

  return hourly.time.slice(0, 24).map((time: string, index: number) => ({
    time,
    hour: formatHour(time),
    temp: convertTemperature(hourly.temperature_2m[index], units.temperature),
    weatherType: mapWeatherCodeToIcon(hourly.weather_code[index]),
  }));
}

function convertTemperature(value: number, unit: Units["temperature"]) {
  if (unit === "fahrenheit") {
    return `${Math.round((value * 9) / 5 + 32)}°F`;
  }

  return `${Math.round(value)}°C`;
}

function convertWindSpeed(value: number, unit: Units["windSpeed"]) {
  if (unit === "mph") {
    return round(value * 0.621371, 1);
  }

  return round(value, 1);
}

function convertPrecipitation(value: number, unit: Units["precipitation"]) {
  if (unit === "inches") {
    return round(value / 25.4, 2);
  }

  return round(value, 1);
}

function round(value: number, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(value));
}

function formatWeekday(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(new Date(value));
}

function formatHour(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,
  }).format(new Date(value));
}

function mapWeatherCodeToIcon(code: number): WeatherIconKey {
  if (code === 0) return "sunny";

  if (code === 1 || code === 2) return "partlyCloudy";

  if (code === 3) return "overcast";

  if (code === 45 || code === 48) return "fog";

  if ([51, 53, 55, 56, 57].includes(code)) return "drizzle";

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";

  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";

  if ([95, 96, 99].includes(code)) return "storm";

  return "sunny";
}
