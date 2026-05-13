import { Check, ChevronDown, Settings } from "lucide-react";
import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";
import { useState } from "react";

type UnitValue = "celsius" | "fahrenheit" | "kmh" | "mph" | "mm" | "in";

import type { Placement } from "react-aria-components";

type UnitsDropdownProps = {
  placement?: Placement;
};

export function UnitsDropdown({
  placement = "bottom start",
}: UnitsDropdownProps) {
  const [temperature, setTemperature] = useState<UnitValue>("celsius");
  const [windSpeed, setWindSpeed] = useState<UnitValue>("kmh");
  const [precipitation, setPrecipitation] = useState<UnitValue>("mm");

  return (
    <DialogTrigger>
      <Button className="flex h-9 items-center gap-2 rounded-lg bg-[#2d1f49] px-3 text-sm text-white outline-none">
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
          <div className="px-3 py-2 text-sm font-medium">
            Switch to Imperial
          </div>

          <Section title="Temperature">
            <UnitRow
              label="Celsius (°C)"
              selected={temperature === "celsius"}
              onPress={() => setTemperature("celsius")}
            />
            <UnitRow
              label="Fahrenheit (°F)"
              selected={temperature === "fahrenheit"}
              onPress={() => setTemperature("fahrenheit")}
            />
          </Section>

          <Section title="Wind Speed">
            <UnitRow
              label="km/h"
              selected={windSpeed === "kmh"}
              onPress={() => setWindSpeed("kmh")}
            />
            <UnitRow
              label="mph"
              selected={windSpeed === "mph"}
              onPress={() => setWindSpeed("mph")}
            />
          </Section>

          <Section title="Precipitation">
            <UnitRow
              label="Millimeters (mm)"
              selected={precipitation === "mm"}
              onPress={() => setPrecipitation("mm")}
            />
            <UnitRow
              label="Inches (in)"
              selected={precipitation === "in"}
              onPress={() => setPrecipitation("in")}
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
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-white outline-none",
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
