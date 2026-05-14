import type { Meta, StoryObj } from "@storybook/react-vite";
import HourlyForecast from "./HourlyForecast";

const meta = {
  title: "Components/HourlyForecast",
  component: HourlyForecast,
  parameters: {
    layout: "centered",
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
} satisfies Meta<typeof HourlyForecast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <main
        style={{
          minHeight: "100vh",
          width: "400px",
          background: "#07001f",
        }}
      >
        <Story />
      </main>
    ),
  ],
};

export const Desktop: Story = {
  parameters: {
    layout: "fullscreen",
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
