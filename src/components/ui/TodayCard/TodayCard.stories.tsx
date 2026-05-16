import type { Meta, StoryObj } from "@storybook/react-vite";
import TodayCard from "./TodayCard";
import type { ParsedWeatherData } from "../../../shared/contexts";

type WeatherType =
  | "sunny"
  | "drizzle"
  | "fog"
  | "overcast"
  | "partlyCloudy"
  | "rain"
  | "storm"
  | "snow";

function createTodayData({
  location,
  date,
  temperature,
  feelsLike,
  weatherType,
}: {
  location: string;
  date: string;
  temperature: string;
  feelsLike?: string;
  weatherType: WeatherType;
}): ParsedWeatherData {
  return {
    today: {
      location,
      date,
      temperature,
      weatherType,
      feelsLike: feelsLike ?? temperature,
      humidity: 60,
      windSpeed: 10,
      precipitation: 0,
    },
    dailyForecast: [],
    hourlyForecast: [],
  };
}

const meta = {
  title: "Components/TodayCard",
  component: TodayCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    todayData: createTodayData({
      location: "Berlin, Germany",
      date: "Tuesday, 13 May",
      temperature: "28°C",
      feelsLike: "26°C",
      weatherType: "sunny",
    }),
    isLoading: false,
  },
} satisfies Meta<typeof TodayCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sunny: Story = {};

export const Drizzle: Story = {
  args: {
    todayData: createTodayData({
      location: "London, United Kingdom",
      date: "Tuesday, 13 May",
      temperature: "22°C",
      feelsLike: "20°C",
      weatherType: "drizzle",
    }),
  },
};

export const Fog: Story = {
  args: {
    todayData: createTodayData({
      location: "San Francisco, United States",
      date: "Tuesday, 13 May",
      temperature: "18°C",
      feelsLike: "17°C",
      weatherType: "fog",
    }),
  },
};

export const Overcast: Story = {
  args: {
    todayData: createTodayData({
      location: "Amsterdam, Netherlands",
      date: "Tuesday, 13 May",
      temperature: "17°C",
      feelsLike: "15°C",
      weatherType: "overcast",
    }),
  },
};

export const PartlyCloudy: Story = {
  args: {
    todayData: createTodayData({
      location: "Paris, France",
      date: "Tuesday, 13 May",
      temperature: "21°C",
      feelsLike: "20°C",
      weatherType: "partlyCloudy",
    }),
  },
};

export const Rain: Story = {
  args: {
    todayData: createTodayData({
      location: "Manchester, United Kingdom",
      date: "Tuesday, 13 May",
      temperature: "14°C",
      feelsLike: "12°C",
      weatherType: "rain",
    }),
  },
};

export const Storm: Story = {
  args: {
    todayData: createTodayData({
      location: "Miami, United States",
      date: "Tuesday, 13 May",
      temperature: "26°C",
      feelsLike: "28°C",
      weatherType: "storm",
    }),
  },
};

export const Snow: Story = {
  args: {
    todayData: createTodayData({
      location: "Oslo, Norway",
      date: "Tuesday, 13 May",
      temperature: "-5°C",
      feelsLike: "-8°C",
      weatherType: "snow",
    }),
  },
};

export const Fahrenheit: Story = {
  args: {
    todayData: createTodayData({
      location: "New York, United States",
      date: "Tuesday, 13 May",
      temperature: "72°F",
      feelsLike: "70°F",
      weatherType: "partlyCloudy",
    }),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    todayData: null,
  },
};

export const Empty: Story = {
  args: {
    isLoading: false,
    todayData: null,
  },
};

export const LongLocation: Story = {
  args: {
    todayData: createTodayData({
      location: "San Francisco, California, United States",
      date: "Wednesday, 14 May",
      temperature: "21°C",
      feelsLike: "19°C",
      weatherType: "partlyCloudy",
    }),
  },
};
