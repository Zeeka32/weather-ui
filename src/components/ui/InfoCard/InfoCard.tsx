import classes from "./infoCard.module.css";

type InfoCardProps = {
  header: string;
  value: number | string;
  unit?: string;
};

function InfoCard({ header, value, unit }: InfoCardProps) {
  return (
    <div className={classes["info-card-main"]}>
      <div className={classes["info-card-header"]}>{header}</div>
      <div className={classes["info-card-value"]}>
        {value}
        {unit && <span className={classes["info-card-unit"]}>{unit}</span>}
      </div>
    </div>
  );
}

export default InfoCard;
