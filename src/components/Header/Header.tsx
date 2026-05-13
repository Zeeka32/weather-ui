import { useEffect, useState } from "react";
import { UnitsDropdown } from "../ui/UnitsDropdown/UnitsDropdown";
import classes from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${
        isScrolled ? classes["header-scrolled"] : ""
      }`}
    >
      <img
        src="/assets/images/logo.svg"
        alt="Logo"
        width={200}
        height={200}
        className={classes.logo}
      />

      <UnitsDropdown placement="bottom end" />
    </header>
  );
}
