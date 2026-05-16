import { weatherIcons, type WeatherIconKey } from "../../../shared/weatherIcon";
import classes from "./hourlyCard.module.css";

type HourlyCardProps = {
  weatherType: WeatherIconKey;
  hour: string;
  temp: string;
  isLoading?: boolean;
};

function HourlyCard({ weatherType, hour, temp, isLoading }: HourlyCardProps) {
  const icon = weatherIcons[weatherType];

  return (
    <div className={classes["hourly-card-main"]}>
      {!isLoading && (
        <>
          <div className={classes["hourly-card-left"]}>
            <img src={icon.src} alt={icon.alt} width={45} height={45} />
            <span>{hour}</span>
          </div>
          <div className={classes["temp"]}>{temp}</div>
        </>
      )}
    </div>
  );
}

export default HourlyCard;
