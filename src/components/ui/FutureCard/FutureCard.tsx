import { weatherIcons, type WeatherIconKey } from "../../../shared/weatherIcon";
import classes from "./futureCard.module.css";

type FutureCardProps = {
  weatherType: WeatherIconKey;
  text: string;
  low: number;
  high: number;
};

function FutureCard({ weatherType, text, low, high }: FutureCardProps) {
  const icon = weatherIcons[weatherType];

  return (
    <div className={classes["future-card-main"]}>
      <div className={classes["future-card-header"]}>{text}</div>
      <img src={icon.src} alt={icon.alt} width={100} height={100} />
      <div className={classes["future-card-temp"]}>
        <div className={classes["high"]}>{high}°</div>
        <div className={classes["low"]}>{low}°</div>
      </div>
    </div>
  );
}

export default FutureCard;
