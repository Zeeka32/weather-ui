import { weatherIcons, type WeatherIconKey } from "../../../shared/weatherIcon";
import classes from "./todayCard.module.css";

type TodayCardProps = {
  weatherType: WeatherIconKey;
  header: string;
  body: string;
  temperature: number;
};

function TodayCard({ weatherType, header, body, temperature }: TodayCardProps) {
  const icon = weatherIcons[weatherType];

  return (
    <div className={classes["today-card-main"]}>
      <div className={classes["today-card-left"]}>
        <div className={classes["today-card-header"]}>{header}</div>
        <div className={classes["today-card-body"]}>{body}</div>
      </div>

      <div className={classes["today-card-right"]}>
        <img src={icon.src} alt={icon.alt} width={100} height={100} />

        <div className={classes["today-card-temp"]}>{temperature}°</div>
      </div>
    </div>
  );
}

export default TodayCard;
