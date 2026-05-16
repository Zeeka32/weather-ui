import { Button, type Key } from "react-aria-components";
import { useEffect, useState } from "react";
import { SearchComboBox, type CityOption } from "../ui/ComboBox/ComboBox";
import { useCountries, useWeather } from "../../shared/api";
import { useDebounce } from "../../shared/hooks";
import classes from "./main.module.css";
import TodayCard from "../ui/TodayCard/TodayCard";
import InfoCard from "../ui/InfoCard/InfoCard";
import FutureCard from "../ui/FutureCard/FutureCard";
import HourlyForecast from "../ui/HourlyForecast/HourlyForecast";
import { useWeatherAppContext } from "../../shared/contexts";

function mapCountriesToCityOptions(countries: any): CityOption[] {
  return (
    countries?.results?.map((city: any) => ({
      id: String(city.id),
      name: [city.name, city.admin1, city.country].filter(Boolean).join(", "),
      latitude: city.latitude,
      longitude: city.longitude,
      timezone: city.timezone,
      country: city.country,
      admin1: city.admin1,
    })) ?? []
  );
}

function Main() {
  const [query, setQuery] = useState("");
  const [startSearch, setStartSearch] = useState(false);

  const {
    parsedData,
    selectedCity,
    setSelectedCity,
    setRawWeatherData,
    setWeatherCity,
    units,
  } = useWeatherAppContext();

  const [cityCoordinates, setCityCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const debouncedQuery = useDebounce(query, 300);

  const { data: countries } = useCountries(debouncedQuery);
  const { data: rawData, isLoading } = useWeather(
    cityCoordinates.latitude,
    cityCoordinates.longitude,
  );

  useEffect(() => {
    if (!rawData) {
      return;
    }
    setRawWeatherData(rawData);
  }, [rawData]);

  const cityOptions = mapCountriesToCityOptions(countries);
  const forecastCards = parsedData.dailyForecast.slice(0, 6);

  console.log(parsedData);

  function handleSelectionChange(key: Key | null) {
    const selectedCity = cityOptions.find((city) => city.id === key);

    if (selectedCity) {
      setQuery(selectedCity.name);
      setSelectedCity(selectedCity);
    }
  }

  function handleSearch() {
    if (!selectedCity) {
      return;
    }

    setCityCoordinates({
      latitude: selectedCity.latitude,
      longitude: selectedCity.longitude,
    });
    setStartSearch(true);
    setWeatherCity(selectedCity);
  }

  return (
    <div className={classes["main"]}>
      <h1 className={classes["main-header"]}>
        How&apos;s the sky looking today?
      </h1>

      <div className={classes["search-container"]}>
        <SearchComboBox
          value={query}
          selectedKey={selectedCity?.id ?? null}
          items={cityOptions}
          onInputChange={(value) => {
            setQuery(value);
            setSelectedCity(null);
          }}
          onSelectionChange={handleSelectionChange}
          placeholder="Search for a place..."
        />

        <Button
          className={classes["search-button"]}
          isDisabled={!selectedCity}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {startSearch && (
        <div className={classes["main-content"]}>
          <div className={classes["content-left"]}>
            <TodayCard todayData={parsedData} isLoading={isLoading} />
            <div className={classes["info-cards"]}>
              <InfoCard
                header="Feels Like"
                value={parsedData.today?.feelsLike}
                isLoading={isLoading}
              />
              <InfoCard
                header="Humidity"
                value={parsedData.today?.humidity?.toFixed(0)}
                unit="%"
                isLoading={isLoading}
              />
              <InfoCard
                header="Wind Speed"
                value={parsedData.today?.windSpeed}
                unit={units.windSpeed}
                isLoading={isLoading}
              />
              <InfoCard
                header="Precipitation"
                value={parsedData.today?.precipitation}
                unit={units.precipitation}
                isLoading={isLoading}
              />
            </div>

            <h2>Daily Forecast</h2>

            <div className={classes["future-cards"]}>
              {forecastCards.length > 0
                ? forecastCards.map((day) => (
                    <FutureCard
                      key={day.date}
                      text={day.day}
                      low={day.low}
                      high={day.high}
                      weatherType={day.weatherType}
                      isLoading={isLoading}
                    />
                  ))
                : Array.from({ length: 6 }).map((_, index) => (
                    <FutureCard
                      key={index}
                      text="--"
                      low="--"
                      high="--"
                      weatherType="sunny"
                      isLoading={isLoading}
                    />
                  ))}
            </div>
          </div>

          <div className={classes["content-right"]}>
            <HourlyForecast parsedData={parsedData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
