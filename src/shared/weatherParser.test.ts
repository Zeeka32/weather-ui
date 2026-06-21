// weatherParser.test.ts
import { describe, expect, it } from "vitest";
import {
  convertTemperature,
  convertWindSpeed,
  convertPrecipitation,
  mapWeatherCodeToIcon,
  parseWeatherData,
} from "./weatherParser";

describe("weatherParser", () => {
  it("returns empty data when raw weather data is missing", () => {
    const result = parseWeatherData(null, null, {
      temperature: "celsius",
      windSpeed: "km/h",
      precipitation: "mm",
    });

    expect(result).toEqual({
      today: null,
      dailyForecast: [],
      hourlyForecast: [],
    });
  });

  it("converts temperature to celsius", () => {
    expect(convertTemperature(30, "celsius")).toBe("30°C");
  });

  it("converts temperature to fahrenheit", () => {
    expect(convertTemperature(30, "fahrenheit")).toBe("86°F");
  });

  it("converts wind speed to km/h", () => {
    expect(convertWindSpeed(10, "km/h")).toBe(10);
  });

  it("converts wind speed to mph", () => {
    expect(convertWindSpeed(10, "mph")).toBe(6.2);
  });

  it("converts precipitation to mm", () => {
    expect(convertPrecipitation(25.4, "mm")).toBe(25.4);
  });

  it("converts precipitation to inches", () => {
    expect(convertPrecipitation(25.4, "inches")).toBe(1);
  });

  it.each([
    [0, "sunny"],
    [1, "partlyCloudy"],
    [2, "partlyCloudy"],
    [3, "overcast"],
    [45, "fog"],
    [48, "fog"],
    [51, "drizzle"],
    [61, "rain"],
    [71, "snow"],
    [95, "storm"],
    [999, "sunny"],
  ] as const)("maps weather code %s to %s", (code, icon) => {
    expect(mapWeatherCodeToIcon(code)).toBe(icon);
  });
});