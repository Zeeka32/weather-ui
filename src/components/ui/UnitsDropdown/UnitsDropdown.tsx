import { Check, ChevronDown, Settings } from "lucide-react";
import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";

import type { Placement } from "react-aria-components";
import { useWeatherAppContext } from "../../../shared/contexts";

type UnitsDropdownProps = {
  placement?: Placement;
};

export function UnitsDropdown({
  placement = "bottom start",
}: UnitsDropdownProps) {
  const { units, setUnits, system, setSystem } = useWeatherAppContext();
  const { temperature, windSpeed, precipitation } = units;

  const toggleSystem = () => {
    if (system === "metric") {
      setSystem("imperial");
    } else {
      setSystem("metric");
    }
  };

  return (
    <DialogTrigger>
      <Button className="flex h-9 items-center gap-2 rounded-lg bg-[#2d1f49] px-3 text-sm cursor-pointer text-white outline-none hover:bg-[#2d1f49]/90 focus:ring-2 focus:ring-white/40 active:bg-[#2d1f49]/80">
        <Settings className="h-4 w-4" />
        Units
        <ChevronDown className="h-4 w-4" />
      </Button>

      <Popover
        offset={8}
        placement={placement}
        className="z-50 w-56 rounded-lg border border-white/10 bg-[#2d1f49] p-1 text-white shadow-xl outline-none"
      >
        <Dialog className="outline-none">
          <Button
            className="w-full text-start px-3 py-2 text-sm font-medium cursor-pointer text-white hover:bg-white/10 rounded-md active:bg-white/20"
            onPress={toggleSystem}
          >
            {system === "metric" && "Switch to Imperial"}
            {system === "imperial" && "Switch to Metric"}
          </Button>

          <Section title="Temperature">
            <UnitRow
              label="Celsius (°C)"
              selected={temperature === "celsius"}
              onPress={() => setUnits({ ...units, temperature: "celsius" })}
            />
            <UnitRow
              label="Fahrenheit (°F)"
              selected={temperature === "fahrenheit"}
              onPress={() => setUnits({ ...units, temperature: "fahrenheit" })}
            />
          </Section>

          <Section title="Wind Speed">
            <UnitRow
              label="km/h"
              selected={windSpeed === "km/h"}
              onPress={() => setUnits({ ...units, windSpeed: "km/h" })}
            />
            <UnitRow
              label="mph"
              selected={windSpeed === "mph"}
              onPress={() => setUnits({ ...units, windSpeed: "mph" })}
            />
          </Section>

          <Section title="Precipitation">
            <UnitRow
              label="Millimeters (mm)"
              selected={precipitation === "mm"}
              onPress={() => setUnits({ ...units, precipitation: "mm" })}
            />
            <UnitRow
              label="Inches (in)"
              selected={precipitation === "inches"}
              onPress={() => setUnits({ ...units, precipitation: "inches" })}
            />
          </Section>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/10 py-1 first:border-t-0">
      <div className="px-3 py-1 text-xs font-medium text-white/45">{title}</div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function UnitRow({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      onPress={onPress}
      className={({ isHovered, isFocusVisible }) =>
        [
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-white outline-none active:bg-white/20",
          selected ? "bg-white/8" : "",
          isHovered ? "bg-white/10" : "",
          isFocusVisible ? "ring-2 ring-white/40" : "",
        ].join(" ")
      }
    >
      <span>{label}</span>
      {selected && <Check className="h-4 w-4 text-white/80" />}
    </Button>
  );
}
