import { useEffect, useMemo, useState } from "react";
import type { Key } from "react-aria-components";
import type { ParsedWeatherData } from "../../../shared/contexts";
import HourlyCard from "../HourlyCard/HourlyCard";
import Select from "../Select/Select";
import classes from "./hourlyForecast.module.css";

type HourlyForecastProps = {
  parsedData: ParsedWeatherData;
  isLoading?: boolean;
};

function HourlyForecast({ parsedData, isLoading }: HourlyForecastProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const dayOptions = useMemo(() => {
    return parsedData.hourlyForecast.map((day) => ({
      id: day.date,
      label: formatFullWeekday(day.date),
    }));
  }, [parsedData.hourlyForecast]);

  useEffect(() => {
    if (dayOptions.length === 0) {
      setSelectedDate(null);
      return;
    }

    const selectedDateStillExists = dayOptions.some(
      (option) => option.id === selectedDate,
    );

    if (!selectedDate || !selectedDateStillExists) {
      setSelectedDate(dayOptions[0].id);
    }
  }, [dayOptions, selectedDate]);

  const selectedDay =
    parsedData.hourlyForecast.find((day) => day.date === selectedDate) ??
    parsedData.hourlyForecast[0];

  const hourlyItems = selectedDay?.hours ?? [];

  function handleDayChange(key: Key | null) {
    if (!key) return;

    setSelectedDate(String(key));
  }

  return (
    <div className={classes["hourly-forecast-main"]}>
      <div className={classes["hourly-forecast-header"]}>
        <h2 className={classes["hourly-forecast-title"]}>Hourly Forecast</h2>

        <Select
          label="Time Range"
          items={dayOptions}
          selectedKey={selectedDate ?? undefined}
          onSelectionChange={handleDayChange}
        />
      </div>

      <div className={classes["hourly-forecast-cards"]}>
        {hourlyItems.length > 0
          ? hourlyItems.map((hour) => (
              <HourlyCard
                key={hour.time}
                weatherType={hour.weatherType}
                hour={hour.hour}
                temp={hour.temp}
                isLoading={isLoading}
              />
            ))
          : Array.from({ length: 24 }).map((_, index) => (
              <HourlyCard
                key={index}
                weatherType="sunny"
                hour="--"
                temp="--"
                isLoading={isLoading}
              />
            ))}
      </div>
    </div>
  );
}

function formatFullWeekday(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(`${date}T00:00:00`));
}

export default HourlyForecast;
