const search_countries = "https://geocoding-api.open-meteo.com/v1";
const url = "https://api.open-meteo.com/v1/forecast";

import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "openmeteo";

const fetchCountries = async (query: string = "") => {
  const response = await fetch(
    search_countries + `/search?name=${query}&count=10`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data = await response.json();
  return data;
};

export const useCountries = (query: string = "") => {
  return useQuery({
    queryKey: ["countries", query],
    queryFn: () => fetchCountries(query),
    staleTime: 1000 * 60 * 5,
    enabled: query.length > 0,
  });
};

const fetchWeather = async (latitude: number, longitude: number) => {
  const data = await fetchWeatherApi(url, {
    latitude,
    longitude,
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["temperature_2m", "weather_code"],
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "wind_speed_10m",
      "weather_code",
      "apparent_temperature",
    ],
  });

  const response = data[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
      relative_humidity_2m: current.variables(1)!.value(),
      precipitation: current.variables(2)!.value(),
      wind_speed_10m: current.variables(3)!.value(),
      weather_code: current.variables(4)!.value(),
      apparent_temperature: current.variables(5)!.value(),
    },
    hourly: {
      time: Array.from(
        {
          length:
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
            hourly.interval(),
        },
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000,
          ),
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
      weather_code: hourly.variables(1)!.valuesArray(),
    },
    daily: {
      time: Array.from(
        {
          length:
            (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
        },
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000,
          ),
      ),
      weather_code: daily.variables(0)!.valuesArray(),
      temperature_2m_max: daily.variables(1)!.valuesArray(),
      temperature_2m_min: daily.variables(2)!.valuesArray(),
    },
  };

  return weatherData;
};

export const useWeather = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => fetchWeather(latitude, longitude),
    staleTime: 1000 * 60 * 5,
    enabled: latitude !== 0 && longitude !== 0,
  });
};
