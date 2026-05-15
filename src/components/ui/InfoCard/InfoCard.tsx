import classes from "./infoCard.module.css";

type InfoCardProps = {
  header: string;
  value: number | string;
  unit?: string;
  isLoading?: boolean;
};

function InfoCard({ header, value, unit, isLoading }: InfoCardProps) {
  return (
    <div className={classes["info-card-main"]}>
      <div className={classes["info-card-header"]}>
        {isLoading ? "-" : header}
      </div>
      <div className={classes["info-card-value"]}>
        {isLoading ? "-" : value}
        {unit && <span className={classes["info-card-unit"]}>{unit}</span>}
      </div>
    </div>
  );
}

export default InfoCard;
