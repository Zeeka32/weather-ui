import type { Meta, StoryObj } from "@storybook/react-vite";
import FutureCard from "./FutureCard";
import { weatherIcons, weatherIconOptions } from "../../../shared/weatherIcon";

const meta = {
  title: "Components/FutureCard",
  component: FutureCard,
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
    text: {
      control: "text",
    },
    low: {
      control: "number",
    },
    high: {
      control: "number",
    },
  },
  args: {
    weatherType: "sunny",
    text: "Today",
    low: 19,
    high: 28,
  },
} satisfies Meta<typeof FutureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sunny: Story = {
  args: {
    weatherType: "sunny",
    text: "Today",
    low: 19,
    high: 28,
  },
};

export const Drizzle: Story = {
  args: {
    weatherType: "drizzle",
    text: "Monday",
    low: 16,
    high: 22,
  },
};

export const Fog: Story = {
  args: {
    weatherType: "fog",
    text: "Tuesday",
    low: 14,
    high: 18,
  },
};

export const Overcast: Story = {
  args: {
    weatherType: "overcast",
    text: "Wednesday",
    low: 15,
    high: 21,
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherType: "partlyCloudy",
    text: "Thursday",
    low: 18,
    high: 25,
  },
};

export const Rain: Story = {
  args: {
    weatherType: "rain",
    text: "Friday",
    low: 13,
    high: 19,
  },
};

export const Storm: Story = {
  args: {
    weatherType: "storm",
    text: "Saturday",
    low: 17,
    high: 24,
  },
};

export const Snow: Story = {
  args: {
    weatherType: "snow",
    text: "Sunday",
    low: -8,
    high: -2,
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
        <FutureCard weatherType="sunny" text="Today" low={19} high={28} />
        <FutureCard
          weatherType="partlyCloudy"
          text="Monday"
          low={18}
          high={25}
        />
        <FutureCard weatherType="rain" text="Tuesday" low={13} high={19} />
        <FutureCard weatherType="storm" text="Wednesday" low={17} high={24} />
        <FutureCard weatherType="snow" text="Thursday" low={-8} high={-2} />
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
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <FutureCard weatherType="sunny" text="Today" low={19} high={28} />
        <FutureCard weatherType="drizzle" text="Mon" low={16} high={22} />
        <FutureCard weatherType="fog" text="Tue" low={14} high={18} />
        <FutureCard weatherType="overcast" text="Wed" low={15} high={21} />
        <FutureCard weatherType="partlyCloudy" text="Thu" low={18} high={25} />
        <FutureCard weatherType="rain" text="Fri" low={13} high={19} />
        <FutureCard weatherType="storm" text="Sat" low={17} high={24} />
        <FutureCard weatherType="snow" text="Sun" low={-8} high={-2} />
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
        <FutureCard weatherType="sunny" text="Today" low={19} high={28} />
        <FutureCard
          weatherType="partlyCloudy"
          text="Monday"
          low={18}
          high={25}
        />
        <FutureCard weatherType="rain" text="Tuesday" low={13} high={19} />
        <FutureCard weatherType="storm" text="Wednesday" low={17} high={24} />
      </div>
    </main>
  ),
};

export const LongText: Story = {
  args: {
    weatherType: "partlyCloudy",
    text: "Wednesday Afternoon",
    low: 18,
    high: 25,
  },
};

export const NegativeTemperatures: Story = {
  args: {
    weatherType: "snow",
    text: "Sunday",
    low: -12,
    high: -4,
  },
};
