import { SearchComboBox } from "../ui/ComboBox/ComboBox";
import FutureCard from "../ui/FutureCard/FutureCard";
import HourlyForecast from "../ui/HourlyForecast/HourlyForecast";
import InfoCard from "../ui/InfoCard/InfoCard";
import TodayCard from "../ui/TodayCard/TodayCard";
import classes from "./main.module.css";

function Main() {
  return (
    <div className={classes["main"]}>
      <h1 className={classes["main-header"]}>How's the sky looking today?</h1>
      <div className={classes["search-container"]}>
        <SearchComboBox items={[]} />
      </div>
      <div className={classes["main-content"]}>
        <div className={classes["content-left"]}>
          <TodayCard
            header="berlin"
            body="Tusday"
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
