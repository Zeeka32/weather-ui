import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  type Key,
} from "react-aria-components";
import classes from "./select.module.css";
import { ChevronDown } from "lucide-react";

export type SelectOption = {
  id: string;
  label: string;
};

type SelectProps = {
  label: string;
  placeholder?: string;
  items: SelectOption[];
  defaultSelectedKey?: Key;
  selectedKey?: Key;
  onSelectionChange?: (key: Key | null) => void;
};

function Select({
  label,
  placeholder = "Select an option",
  items,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
}: SelectProps) {
  return (
    <AriaSelect
      aria-label={label}
      defaultSelectedKey={defaultSelectedKey}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      className={classes["select"]}
    >
      <Button className={classes["button"]}>
        <SelectValue>
          {({ selectedText }) => selectedText || placeholder}
        </SelectValue>

        <ChevronDown className={classes["icon"]} />
      </Button>

      <Popover className={classes["popover"]}>
        <ListBox items={items} className={classes["list-box"]}>
          {(item) => (
            <ListBoxItem
              id={item.id}
              textValue={item.label}
              className={classes["item"]}
            >
              {item.label}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export default Select;
