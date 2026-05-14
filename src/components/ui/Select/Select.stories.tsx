import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";

const forecastOptions = [
  { id: "today", label: "Today" },
  { id: "tomorrow", label: "Tomorrow" },
  { id: "week", label: "This Week" },
];

const unitOptions = [
  { id: "metric", label: "Metric" },
  { id: "imperial", label: "Imperial" },
];

const meta = {
  title: "Components/Select",
  component: Select,
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
          padding: "20px",
        }}
      >
        <Story />
      </main>
    ),
  ],
  args: {
    label: "Forecast",
    placeholder: "Choose forecast",
    items: forecastOptions,
    defaultSelectedKey: "today",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDefaultValue: Story = {
  args: {
    defaultSelectedKey: undefined,
  },
};

export const Units: Story = {
  args: {
    label: "Units",
    placeholder: "Choose units",
    items: unitOptions,
    defaultSelectedKey: "metric",
  },
};

export const ManyOptions: Story = {
  args: {
    label: "Time range",
    placeholder: "Choose time range",
    items: [
      { id: "1h", label: "Next hour" },
      { id: "3h", label: "Next 3 hours" },
      { id: "6h", label: "Next 6 hours" },
      { id: "12h", label: "Next 12 hours" },
      { id: "24h", label: "Next 24 hours" },
      { id: "week", label: "This week" },
    ],
    defaultSelectedKey: "6h",
  },
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
