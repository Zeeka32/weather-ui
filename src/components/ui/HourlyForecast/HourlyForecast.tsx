import HourlyCard from "../HourlyCard/HourlyCard";
import Select from "../Select/Select";
import classes from "./hourlyForecast.module.css";

function HourlyForecast() {
  return (
    <div className={classes["hourly-forecast-main"]}>
      <div className={classes["hourly-forecast-header"]}>
        <h2 className={classes["hourly-forecast-title"]}>Hourly Forecast</h2>
        <Select label="Time Range" items={[]} />
      </div>
      <div className={classes["hourly-forecast-cards"]}>
        <HourlyCard weatherType="snow" hour="1 PM" temp={25} />
        <HourlyCard weatherType="fog" hour="2 PM" temp={27} />
        <HourlyCard weatherType="snow" hour="3 PM" temp={22} />
        <HourlyCard weatherType="rain" hour="4 PM" temp={20} />
        <HourlyCard weatherType="storm" hour="5 PM" temp={18} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
        <HourlyCard weatherType="snow" hour="6 PM" temp={0} />
      </div>
    </div>
  );
}

export default HourlyForecast;
