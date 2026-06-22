import type { ParsedWeatherData } from "../../../shared/types";
import { weatherIcons } from "../../../shared/weatherIcon";
import classes from "./todayCard.module.css";

type TodayCardProps = {
  todayData: ParsedWeatherData | null;
  isLoading?: boolean;
};

function TodayCard({ todayData, isLoading }: TodayCardProps) {
  if (isLoading) {
    return (
      <div className={classes["today-card-main"] + " " + classes["loading"]}>
        <div className={classes["loading-spinner"]}></div>
        <div className={classes["loading-text"]}>Loading...</div>
      </div>
    );
  }

  if (!todayData?.today) {
    return (
      <div className={classes["today-card-main"] + " " + classes["loading"]}>
        <div className={classes["loading-spinner"]}></div>
        <div className={classes["loading-text"]}>Loading...</div>
      </div>
    );
  }

  const { weatherType, temperature, location, date } = todayData.today;
  const icon = weatherIcons[weatherType];

  return (
    <div className={classes["today-card-main"]}>
      <div className={classes["today-card-left"]}>
        <div className={classes["today-card-header"]}>{location}</div>
        <div className={classes["today-card-body"]}>{date}</div>
      </div>

      <div className={classes["today-card-right"]}>
        <img src={icon.src} alt={icon.alt} width={100} height={100} />

        <div className={classes["today-card-temp"]}>{temperature}</div>
      </div>
    </div>
  );
}

export default TodayCard;
