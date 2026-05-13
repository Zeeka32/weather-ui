import type { Meta, StoryObj } from "@storybook/react-vite";
import TodayCard from "./TodayCard";
import { weatherIcons, weatherIconOptions } from "../../../shared/weatherIcon";

const meta = {
  title: "Components/TodayCard",
  component: TodayCard,
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
    header: {
      control: "text",
    },
    body: {
      control: "text",
    },
    temperature: {
      control: "number",
    },
  },
  args: {
    weatherType: "sunny",
    header: "Berlin, Germany",
    body: "Tuesday, 13 May",
    temperature: 28,
  },
} satisfies Meta<typeof TodayCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sunny: Story = {};

export const Drizzle: Story = {
  args: {
    weatherType: "drizzle",
    header: "London, United Kingdom",
    temperature: 22,
  },
};

export const Fog: Story = {
  args: {
    weatherType: "fog",
    header: "San Francisco, United States",
    temperature: 18,
  },
};

export const Overcast: Story = {
  args: {
    weatherType: "overcast",
    header: "Amsterdam, Netherlands",
    temperature: 17,
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherType: "partlyCloudy",
    header: "Paris, France",
    temperature: 21,
  },
};

export const Rain: Story = {
  args: {
    weatherType: "rain",
    header: "Manchester, United Kingdom",
    temperature: 14,
  },
};

export const Storm: Story = {
  args: {
    weatherType: "storm",
    header: "Miami, United States",
    temperature: 26,
  },
};

export const Snow: Story = {
  args: {
    weatherType: "snow",
    header: "Oslo, Norway",
    temperature: -5,
  },
};
