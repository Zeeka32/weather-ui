import { Button, type Key } from "react-aria-components";
import { useState } from "react";
import { SearchComboBox, type CityOption } from "../ui/ComboBox/ComboBox";
import { useCountries } from "../../shared/api";
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
  const { selectedCity, setSelectedCity } = useWeatherAppContext();

  const debouncedQuery = useDebounce(query, 300);

  const { data: countries } = useCountries(debouncedQuery);

  const cityOptions = mapCountriesToCityOptions(countries);

  function handleSelectionChange(key: Key | null) {
    const selectedCity = cityOptions.find((city) => city.id === key);

    if (selectedCity) {
      setQuery(selectedCity.name);
      setSelectedCity(selectedCity);
    }
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

        <Button className={classes["search-button"]} isDisabled={!selectedCity}>
          Search
        </Button>
      </div>

      <div className={classes["main-content"]}>
        <div className={classes["content-left"]}>
          <TodayCard
            header="Berlin"
            body="Tuesday"
            temperature={20}
            weatherType="snow"
          />

          <div className={classes["info-cards"]}>
            <InfoCard header="Feels Like" value={18} unit="°" />
            <InfoCard header="Humidity" value={60} unit="%" />
            <InfoCard header="Wind Speed" value={10} unit="km/h" />
            <InfoCard header="Precipitation" value={5} unit="mm" />
          </div>

          <h2>Daily Forecast</h2>

          <div className={classes["future-cards"]}>
            <FutureCard text="Tue" low={12} high={20} weatherType="sunny" />
            <FutureCard
              text="Wed"
              low={10}
              high={18}
              weatherType="partlyCloudy"
            />
            <FutureCard text="Thu" low={8} high={15} weatherType="rain" />
            <FutureCard text="Fri" low={5} high={12} weatherType="snow" />
            <FutureCard
              text="Sat"
              low={7}
              high={14}
              weatherType="partlyCloudy"
            />
            <FutureCard text="Sun" low={9} high={17} weatherType="sunny" />
          </div>
        </div>

        <div className={classes["content-right"]}>
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default Main;
