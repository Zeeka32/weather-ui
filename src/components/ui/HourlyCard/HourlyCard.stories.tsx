import type { Meta, StoryObj } from "@storybook/react-vite";
import HourlyCard from "./HourlyCard";
import { weatherIcons, weatherIconOptions } from "../../../shared/weatherIcon";

const meta = {
  title: "Components/HourlyCard",
  component: HourlyCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a single hourly forecast item with weather icon, hour label, and temperature.",
      },
    },
  },
  argTypes: {
    weatherType: {
      control: "select",
      options: weatherIconOptions,
      labels: Object.fromEntries(
        weatherIconOptions.map((key) => [key, weatherIcons[key].label]),
      ),
      description: "Weather condition used to choose the displayed icon.",
    },
    hour: {
      control: "text",
      description: "Formatted hour label, for example 12 PM or 6 AM.",
    },
    temp: {
      control: "text",
      description: "Temperature value. Can include unit, for example 28°C.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows the card loading/skeleton state.",
    },
  },
  args: {
    weatherType: "sunny",
    hour: "12 PM",
    temp: "28°C",
    isLoading: false,
  },
} satisfies Meta<typeof HourlyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default hourly forecast card.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    weatherType: "sunny",
    hour: "--",
    temp: "--",
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state used before hourly weather data arrives.",
      },
    },
  },
};

export const Sunny: Story = {
  args: {
    weatherType: "sunny",
    hour: "12 PM",
    temp: "28°C",
  },
};

export const Drizzle: Story = {
  args: {
    weatherType: "drizzle",
    hour: "1 PM",
    temp: "22°C",
  },
};

export const Fog: Story = {
  args: {
    weatherType: "fog",
    hour: "6 AM",
    temp: "18°C",
  },
};

export const Overcast: Story = {
  args: {
    weatherType: "overcast",
    hour: "3 PM",
    temp: "17°C",
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherType: "partlyCloudy",
    hour: "4 PM",
    temp: "21°C",
  },
};

export const Rain: Story = {
  args: {
    weatherType: "rain",
    hour: "8 PM",
    temp: "14°C",
  },
};

export const Storm: Story = {
  args: {
    weatherType: "storm",
    hour: "10 PM",
    temp: "26°C",
  },
};

export const Snow: Story = {
  args: {
    weatherType: "snow",
    hour: "5 AM",
    temp: "-5°C",
  },
};

export const Stacked: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Multiple hourly cards stacked vertically.",
      },
    },
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
        <HourlyCard weatherType="sunny" hour="12 PM" temp="28°C" />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp="27°C" />
        <HourlyCard weatherType="overcast" hour="2 PM" temp="25°C" />
        <HourlyCard weatherType="rain" hour="3 PM" temp="22°C" />
        <HourlyCard weatherType="storm" hour="4 PM" temp="21°C" />
        <HourlyCard weatherType="snow" hour="5 PM" temp="-2°C" />
      </div>
    </main>
  ),
};

export const LoadingStacked: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Stack of loading hourly cards.",
      },
    },
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
          <HourlyCard
            key={index}
            weatherType="sunny"
            hour="--"
            temp="--"
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
    docs: {
      description: {
        story: "Responsive grid of hourly cards.",
      },
    },
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
        <HourlyCard weatherType="sunny" hour="12 PM" temp="28°C" />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp="27°C" />
        <HourlyCard weatherType="overcast" hour="2 PM" temp="25°C" />
        <HourlyCard weatherType="drizzle" hour="3 PM" temp="23°C" />
        <HourlyCard weatherType="rain" hour="4 PM" temp="22°C" />
        <HourlyCard weatherType="storm" hour="5 PM" temp="21°C" />
        <HourlyCard weatherType="fog" hour="6 PM" temp="19°C" />
        <HourlyCard weatherType="snow" hour="7 PM" temp="-2°C" />
      </div>
    </main>
  ),
};

export const HorizontalList: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Horizontal scroll layout for many hourly cards.",
      },
    },
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
        <HourlyCard weatherType="sunny" hour="12 PM" temp="28°C" />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp="27°C" />
        <HourlyCard weatherType="overcast" hour="2 PM" temp="25°C" />
        <HourlyCard weatherType="drizzle" hour="3 PM" temp="23°C" />
        <HourlyCard weatherType="rain" hour="4 PM" temp="22°C" />
        <HourlyCard weatherType="storm" hour="5 PM" temp="21°C" />
        <HourlyCard weatherType="fog" hour="6 PM" temp="19°C" />
        <HourlyCard weatherType="snow" hour="7 PM" temp="-2°C" />
      </div>
    </main>
  ),
};

export const MobileStacked: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Mobile-width stacked layout.",
      },
    },
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
        <HourlyCard weatherType="sunny" hour="12 PM" temp="28°C" />
        <HourlyCard weatherType="partlyCloudy" hour="1 PM" temp="27°C" />
        <HourlyCard weatherType="rain" hour="2 PM" temp="22°C" />
        <HourlyCard weatherType="storm" hour="3 PM" temp="21°C" />
      </div>
    </main>
  ),
};

export const NegativeTemperature: Story = {
  args: {
    weatherType: "snow",
    hour: "5 AM",
    temp: "-8°C",
  },
};

export const LongHourText: Story = {
  args: {
    weatherType: "partlyCloudy",
    hour: "Tomorrow 12 PM",
    temp: "21°C",
  },
};
