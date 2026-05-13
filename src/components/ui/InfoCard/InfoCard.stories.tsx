import type { Meta, StoryObj } from "@storybook/react-vite";
import InfoCard from "./InfoCard";

const meta = {
  title: "Components/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    header: {
      control: "text",
    },
    value: {
      control: "text",
    },
    unit: {
      control: "text",
    },
  },
  args: {
    header: "Temperature",
    value: 28,
    unit: "°",
  },
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Temperature: Story = {};

export const WindSpeed: Story = {
  args: {
    header: "Wind Speed",
    value: 12,
    unit: "km/h",
  },
};

export const Humidity: Story = {
  args: {
    header: "Humidity",
    value: 65,
    unit: "%",
  },
};

export const Precipitation: Story = {
  args: {
    header: "Precipitation",
    value: 4.2,
    unit: "mm",
  },
};

export const FeelsLike: Story = {
  args: {
    header: "Feels Like",
    value: 31,
    unit: "°",
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
          maxWidth: "420px",
        }}
      >
        <InfoCard header="Temperature" value={28} unit="°" />
        <InfoCard header="Wind Speed" value={12} unit="km/h" />
        <InfoCard header="Humidity" value={65} unit="%" />
        <InfoCard header="Precipitation" value={4.2} unit="mm" />
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
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <InfoCard header="Temperature" value={28} unit="°" />
        <InfoCard header="Wind Speed" value={12} unit="km/h" />
        <InfoCard header="Humidity" value={65} unit="%" />
        <InfoCard header="Precipitation" value={4.2} unit="mm" />
      </div>
    </main>
  ),
};
