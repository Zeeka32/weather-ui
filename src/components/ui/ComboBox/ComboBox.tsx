import { Search } from "lucide-react";
import { useFilter } from "react-aria";
import {
  ComboBox as AriaComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  type ComboBoxProps as AriaComboBoxProps,
  type Key,
} from "react-aria-components";
import classes from "./comboBox.module.css";

export type CityOption = {
  id: string;
  name: string;
};

type SearchComboBoxProps = Omit<
  AriaComboBoxProps<CityOption>,
  "children" | "items" | "defaultItems" | "onSelectionChange"
> & {
  label?: string;
  placeholder?: string;
  items: CityOption[];
  onSelectionChange?: (key: Key | null) => void;
};

export function SearchComboBox({
  label = "Search city",
  placeholder = "Search for a place...",
  items,
  onSelectionChange,
  ...props
}: SearchComboBoxProps) {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <AriaComboBox<CityOption>
      {...props}
      aria-label={label}
      defaultItems={items}
      defaultFilter={contains}
      onSelectionChange={onSelectionChange}
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
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}
