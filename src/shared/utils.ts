import type { WeatherIconKey } from "../shared/weatherIcon";

export type OpenMeteoData = any;

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
  temp: string;
  weatherType: WeatherIconKey;
};

export type HourlyForecastDay = {
  date: string;
  day: string;
  hours: HourlyForecastItem[];
};

export type ParsedWeatherData = {
  today: TodayWeather | null;
  dailyForecast: DailyForecastItem[];
  hourlyForecast: HourlyForecastDay[];
};