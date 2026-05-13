import { UnitsDropdown } from "../UnitsDropdown/UnitsDropdown";
import classes from "./header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <img src="/assets/images/logo.svg" alt="Logo" width={200} height={200} />
      <UnitsDropdown />
    </div>
  );
}
