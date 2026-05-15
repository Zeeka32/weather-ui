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
      control: "text",
    },
    high: {
      control: "text",
    },
    isLoading: {
      control: "boolean",
    },
  },
  args: {
    weatherType: "sunny",
    text: "Today",
    low: "19°C",
    high: "28°C",
    isLoading: false,
  },
} satisfies Meta<typeof FutureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
    weatherType: "sunny",
    text: "--",
    low: "--",
    high: "--",
  },
};

export const Sunny: Story = {
  args: {
    weatherType: "sunny",
    text: "Today",
    low: "19°C",
    high: "28°C",
  },
};

export const Drizzle: Story = {
  args: {
    weatherType: "drizzle",
    text: "Monday",
    low: "16°C",
    high: "22°C",
  },
};

export const Fog: Story = {
  args: {
    weatherType: "fog",
    text: "Tuesday",
    low: "14°C",
    high: "18°C",
  },
};

export const Overcast: Story = {
  args: {
    weatherType: "overcast",
    text: "Wednesday",
    low: "15°C",
    high: "21°C",
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherType: "partlyCloudy",
    text: "Thursday",
    low: "18°C",
    high: "25°C",
  },
};

export const Rain: Story = {
  args: {
    weatherType: "rain",
    text: "Friday",
    low: "13°C",
    high: "19°C",
  },
};

export const Storm: Story = {
  args: {
    weatherType: "storm",
    text: "Saturday",
    low: "17°C",
    high: "24°C",
  },
};

export const Snow: Story = {
  args: {
    weatherType: "snow",
    text: "Sunday",
    low: "-8°C",
    high: "-2°C",
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
        <FutureCard weatherType="sunny" text="Today" low="19°C" high="28°C" />
        <FutureCard
          weatherType="partlyCloudy"
          text="Monday"
          low="18°C"
          high="25°C"
        />
        <FutureCard weatherType="rain" text="Tuesday" low="13°C" high="19°C" />
        <FutureCard
          weatherType="storm"
          text="Wednesday"
          low="17°C"
          high="24°C"
        />
        <FutureCard weatherType="snow" text="Thursday" low="-8°C" high="-2°C" />
      </div>
    </main>
  ),
};

export const LoadingStacked: Story = {
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
        {Array.from({ length: 6 }).map((_, index) => (
          <FutureCard
            key={index}
            weatherType="sunny"
            text="--"
            low="--"
            high="--"
            isLoading
          />
        ))}
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
        <FutureCard weatherType="sunny" text="Today" low="19°C" high="28°C" />
        <FutureCard weatherType="drizzle" text="Mon" low="16°C" high="22°C" />
        <FutureCard weatherType="fog" text="Tue" low="14°C" high="18°C" />
        <FutureCard weatherType="overcast" text="Wed" low="15°C" high="21°C" />
        <FutureCard
          weatherType="partlyCloudy"
          text="Thu"
          low="18°C"
          high="25°C"
        />
        <FutureCard weatherType="rain" text="Fri" low="13°C" high="19°C" />
        <FutureCard weatherType="storm" text="Sat" low="17°C" high="24°C" />
        <FutureCard weatherType="snow" text="Sun" low="-8°C" high="-2°C" />
      </div>
    </main>
  ),
};

export const LoadingGrid: Story = {
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
        {Array.from({ length: 6 }).map((_, index) => (
          <FutureCard
            key={index}
            weatherType="sunny"
            text="--"
            low="--"
            high="--"
            isLoading
          />
        ))}
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
        <FutureCard weatherType="sunny" text="Today" low="19°C" high="28°C" />
        <FutureCard
          weatherType="partlyCloudy"
          text="Monday"
          low="18°C"
          high="25°C"
        />
        <FutureCard weatherType="rain" text="Tuesday" low="13°C" high="19°C" />
        <FutureCard
          weatherType="storm"
          text="Wednesday"
          low="17°C"
          high="24°C"
        />
      </div>
    </main>
  ),
};

export const LongText: Story = {
  args: {
    weatherType: "partlyCloudy",
    text: "Wednesday Afternoon",
    low: "18°C",
    high: "25°C",
  },
};

export const NegativeTemperatures: Story = {
  args: {
    weatherType: "snow",
    text: "Sunday",
    low: "-12°C",
    high: "-4°C",
  },
};
