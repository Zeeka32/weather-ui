import { Search } from "lucide-react";
import {
  ComboBox as AriaComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  type ComboBoxProps as AriaComboBoxProps,
} from "react-aria-components";
import classes from "./comboBox.module.css";

export type CityOption = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country: string;
  admin1?: string;
};

type SearchComboBoxProps = Omit<
  AriaComboBoxProps<CityOption>,
  "children" | "items" | "defaultItems" | "inputValue" | "onInputChange"
> & {
  label?: string;
  placeholder?: string;
  items: CityOption[];
  value: string;
  onInputChange: (value: string) => void;
};

export function SearchComboBox({
  label = "Search city",
  placeholder = "Search for a place...",
  items,
  value,
  onInputChange,
  ...props
}: SearchComboBoxProps) {
  return (
    <AriaComboBox<CityOption>
      {...props}
      aria-label={label}
      items={items}
      inputValue={value}
      onInputChange={onInputChange}
      className={classes["combo-box"]}
    >
      <div className={classes["input-wrapper"]}>
        <Search className={classes["search-icon"]} aria-hidden />

        <Input className={classes["input"]} placeholder={placeholder} />
      </div>

      <Popover offset={6} className={classes["popover"]}>
        <ListBox<CityOption> className={classes["list-box"]}>
          {(item) => (
            <ListBoxItem
              id={item.id}
              textValue={item.name}
              className={({ isFocused, isSelected }) =>
                [
                  classes["list-item"],
                  isFocused ? classes["focused"] : "",
                  isSelected ? classes["selected"] : "",
                ].join(" ")
              }
            >
              <div className={classes["list-item-content"]}>
                <span className={classes["city-name"]}>{item.name}</span>
              </div>
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}
