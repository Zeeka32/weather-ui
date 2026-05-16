import type { Meta, StoryObj } from "@storybook/react-vite";
import HourlyForecast from "./HourlyForecast";
import type { ParsedWeatherData } from "../../../shared/contexts";

const mockParsedData: ParsedWeatherData = {
  today: {
    location: "Berlin, Germany",
    date: "Tuesday, 13 May",
    temperature: "28°C",
    feelsLike: "26°C",
    humidity: 60,
    windSpeed: 10,
    precipitation: 0,
    weatherType: "sunny",
  },
  dailyForecast: [],
  hourlyForecast: [
    {
      date: "2026-05-14",
      day: "Thu",
      hours: [
        {
          time: "2026-05-14T00:00",
          hour: "12 AM",
          temp: "8°C",
          weatherType: "rain",
        },
        {
          time: "2026-05-14T01:00",
          hour: "1 AM",
          temp: "8°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-14T02:00",
          hour: "2 AM",
          temp: "7°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-14T03:00",
          hour: "3 AM",
          temp: "7°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-14T04:00",
          hour: "4 AM",
          temp: "8°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-14T05:00",
          hour: "5 AM",
          temp: "8°C",
          weatherType: "drizzle",
        },
        {
          time: "2026-05-14T06:00",
          hour: "6 AM",
          temp: "9°C",
          weatherType: "rain",
        },
        {
          time: "2026-05-14T07:00",
          hour: "7 AM",
          temp: "10°C",
          weatherType: "rain",
        },
        {
          time: "2026-05-14T08:00",
          hour: "8 AM",
          temp: "12°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-14T09:00",
          hour: "9 AM",
          temp: "14°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-14T10:00",
          hour: "10 AM",
          temp: "16°C",
          weatherType: "sunny",
        },
        {
          time: "2026-05-14T11:00",
          hour: "11 AM",
          temp: "18°C",
          weatherType: "sunny",
        },
      ],
    },
    {
      date: "2026-05-15",
      day: "Fri",
      hours: [
        {
          time: "2026-05-15T00:00",
          hour: "12 AM",
          temp: "10°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-15T01:00",
          hour: "1 AM",
          temp: "10°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-15T02:00",
          hour: "2 AM",
          temp: "9°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-15T03:00",
          hour: "3 AM",
          temp: "9°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-15T04:00",
          hour: "4 AM",
          temp: "9°C",
          weatherType: "drizzle",
        },
        {
          time: "2026-05-15T05:00",
          hour: "5 AM",
          temp: "10°C",
          weatherType: "drizzle",
        },
        {
          time: "2026-05-15T06:00",
          hour: "6 AM",
          temp: "11°C",
          weatherType: "rain",
        },
        {
          time: "2026-05-15T07:00",
          hour: "7 AM",
          temp: "13°C",
          weatherType: "rain",
        },
        {
          time: "2026-05-15T08:00",
          hour: "8 AM",
          temp: "15°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-15T09:00",
          hour: "9 AM",
          temp: "17°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-15T10:00",
          hour: "10 AM",
          temp: "19°C",
          weatherType: "sunny",
        },
        {
          time: "2026-05-15T11:00",
          hour: "11 AM",
          temp: "21°C",
          weatherType: "sunny",
        },
      ],
    },
    {
      date: "2026-05-16",
      day: "Sat",
      hours: [
        {
          time: "2026-05-16T00:00",
          hour: "12 AM",
          temp: "12°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-16T01:00",
          hour: "1 AM",
          temp: "11°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-16T02:00",
          hour: "2 AM",
          temp: "11°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-16T03:00",
          hour: "3 AM",
          temp: "10°C",
          weatherType: "overcast",
        },
        {
          time: "2026-05-16T04:00",
          hour: "4 AM",
          temp: "10°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-16T05:00",
          hour: "5 AM",
          temp: "11°C",
          weatherType: "fog",
        },
        {
          time: "2026-05-16T06:00",
          hour: "6 AM",
          temp: "13°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-16T07:00",
          hour: "7 AM",
          temp: "15°C",
          weatherType: "partlyCloudy",
        },
        {
          time: "2026-05-16T08:00",
          hour: "8 AM",
          temp: "18°C",
          weatherType: "sunny",
        },
        {
          time: "2026-05-16T09:00",
          hour: "9 AM",
          temp: "20°C",
          weatherType: "sunny",
        },
        {
          time: "2026-05-16T10:00",
          hour: "10 AM",
          temp: "22°C",
          weatherType: "sunny",
        },
        {
          time: "2026-05-16T11:00",
          hour: "11 AM",
          temp: "24°C",
          weatherType: "sunny",
        },
      ],
    },
  ],
};

const emptyParsedData: ParsedWeatherData = {
  today: null,
  dailyForecast: [],
  hourlyForecast: [],
};

const meta = {
  title: "Components/HourlyForecast",
  component: HourlyForecast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays hourly weather cards grouped by day. The select control lets the user switch between available forecast days.",
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#07001f",
          padding: "20px",
        }}
      >
        <Story />
      </main>
    ),
  ],
  args: {
    parsedData: mockParsedData,
    isLoading: false,
  },
  argTypes: {
    parsedData: {
      description:
        "Parsed weather data containing hourlyForecast grouped by day.",
      control: "object",
    },
    isLoading: {
      description:
        "When true, hourly cards render their loading/skeleton state.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof HourlyForecast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default hourly forecast with multiple selectable days.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    parsedData: emptyParsedData,
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows placeholder hourly cards while the weather request is still loading.",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    parsedData: emptyParsedData,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the empty/loading fallback cards when no hourly forecast data exists.",
      },
    },
  },
};

export const Desktop: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Large desktop layout with the component centered in a wide page.",
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        style={{
          minHeight: "100vh",
          background: "#07001f",
          padding: "40px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Story />
        </div>
      </main>
    ),
  ],
};

export const Tablet: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Tablet-sized wrapper for checking medium-width behavior.",
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        style={{
          minHeight: "100vh",
          width: "768px",
          background: "#07001f",
          padding: "24px",
        }}
      >
        <Story />
      </main>
    ),
  ],
};

export const Mobile: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Mobile-sized wrapper for checking narrow layout behavior.",
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        style={{
          minHeight: "100vh",
          width: "375px",
          background: "#07001f",
          padding: "16px",
        }}
      >
        <Story />
      </main>
    ),
  ],
};
