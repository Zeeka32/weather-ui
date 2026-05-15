import { weatherIcons, type WeatherIconKey } from "../../../shared/weatherIcon";
import classes from "./futureCard.module.css";

type FutureCardProps = {
  weatherType: WeatherIconKey;
  text: string;
  low: number | string;
  high: number | string;
  isLoading?: boolean;
};

function FutureCard({
  weatherType,
  text,
  low,
  high,
  isLoading,
}: FutureCardProps) {
  const icon = weatherIcons[weatherType];

  return (
    <div className={classes["future-card-main"]}>
      {!isLoading && (
        <>
          <div className={classes["future-card-header"]}>{text}</div>
          <img src={icon.src} alt={icon.alt} width={80} height={80} />
          <div className={classes["future-card-temp"]}>
            <div className={classes["high"]}>{high}</div>
            <div className={classes["low"]}>{low}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default FutureCard;
