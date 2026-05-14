import type { Meta, StoryObj } from "@storybook/react-vite";
import HourlyCard from "./HourlyCard";
import { weatherIcons, weatherIconOptions } from "../../../shared/weatherIcon";

const meta = {
  title: "Components/HourlyCard",
  component: HourlyCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    weatherType: {
      control: "select",
      options: weatherIconOptions,
      labels: Object.fromEntries(
        weatherIconOptions.map((key) => [key, weatherIcons[key].label]),
      ),
    },
    hour: {
      control: "text",
    },
    temp: {
      control: "number",
    },
  },
  args: {
    weatherType: "sunny",
    hour: "12 PM",
    temp: 28,
  },
} satisfies Meta<typeof HourlyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sunny: Story = {
  args: {
    weatherType: "sunny",
    hour: "12 PM",
    temp: 28,
  },
};

export const Drizzle: Story = {
  args: {
    weatherType: "drizzle",
    hour: "1 PM",
    temp: 22,
  },
};

export const Fog: Story = {
  args: {
    weatherType: "fog",
    hour: "6 AM",
    temp: 18,
  },
};

export const Overcast: Story = {
  args: {
    weatherType: "overcast",
    hour: "3 PM",
    temp: 17,
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherType: "partlyCloudy",
    hour: "4 PM",
    temp: 21,
  },
};

export const Rain: Story = {
  args: {
    weatherType: "rain",
    hour: "8 PM",
    temp: 14,
  },
};

export const Storm: Story = {
  args: {
    weatherType: "storm",
    hour: "10 PM",
    temp: 26,
  },
};

export const Snow: Story = {
  args: {
    weatherType: "snow",
    hour: "5 AM",
    temp: -5,
  },
};

export const Stacked: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <main
      style={{
        minHeight: "100vh",
        background: "#07001f",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "16px",
          maxWidth: "360px",
        }}
      >
        <HourlyCard weatherType="sunny" hour="12 PM" temp={28} />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp={27} />
        <HourlyCard weatherType="overcast" hour="2 PM" temp={25} />
        <HourlyCard weatherType="rain" hour="3 PM" temp={22} />
        <HourlyCard weatherType="storm" hour="4 PM" temp={21} />
        <HourlyCard weatherType="snow" hour="5 PM" temp={-2} />
      </div>
    </main>
  ),
};

export const ResponsiveGrid: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <main
      style={{
        minHeight: "100vh",
        background: "#07001f",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <HourlyCard weatherType="sunny" hour="12 PM" temp={28} />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp={27} />
        <HourlyCard weatherType="overcast" hour="2 PM" temp={25} />
        <HourlyCard weatherType="drizzle" hour="3 PM" temp={23} />
        <HourlyCard weatherType="rain" hour="4 PM" temp={22} />
        <HourlyCard weatherType="storm" hour="5 PM" temp={21} />
        <HourlyCard weatherType="fog" hour="6 PM" temp={19} />
        <HourlyCard weatherType="snow" hour="7 PM" temp={-2} />
      </div>
    </main>
  ),
};

export const HorizontalList: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <main
      style={{
        minHeight: "100vh",
        background: "#07001f",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          maxWidth: "900px",
          overflowX: "auto",
          paddingBottom: "8px",
          margin: "0 auto",
        }}
      >
        <HourlyCard weatherType="sunny" hour="12 PM" temp={28} />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp={27} />
        <HourlyCard weatherType="overcast" hour="2 PM" temp={25} />
        <HourlyCard weatherType="drizzle" hour="3 PM" temp={23} />
        <HourlyCard weatherType="rain" hour="4 PM" temp={22} />
        <HourlyCard weatherType="storm" hour="5 PM" temp={21} />
        <HourlyCard weatherType="fog" hour="6 PM" temp={19} />
        <HourlyCard weatherType="snow" hour="7 PM" temp={-2} />
      </div>
    </main>
  ),
};

export const MobileStacked: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <main
      style={{
        minHeight: "100vh",
        width: "375px",
        background: "#07001f",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <HourlyCard weatherType="sunny" hour="12 PM" temp={28} />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp={27} />
        <HourlyCard weatherType="rain" hour="2 PM" temp={22} />
        <HourlyCard weatherType="storm" hour="3 PM" temp={21} />
      </div>
    </main>
  ),
};

export const NegativeTemperature: Story = {
  args: {
    weatherType: "snow",
    hour: "5 AM",
    temp: -8,
  },
};

export const LongHourText: Story = {
  args: {
    weatherType: "partlyCloudy",
    hour: "Tomorrow 12 PM",
    temp: 21,
  },
};
