import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchComboBox } from "./ComboBox";

const cityOptions = [
  { id: "berlin", name: "Berlin, Germany" },
  { id: "cairo", name: "Cairo, Egypt" },
  { id: "london", name: "London, United Kingdom" },
  { id: "paris", name: "Paris, France" },
  { id: "amsterdam", name: "Amsterdam, Netherlands" },
  { id: "san-francisco", name: "San Francisco, United States" },
  { id: "oslo", name: "Oslo, Norway" },
];

const meta = {
  title: "Components/SearchComboBox",
  component: SearchComboBox,
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
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <Story />
        </div>
      </main>
    ),
  ],
  args: {
    items: cityOptions,
    placeholder: "Search for a place...",
    label: "Search city",
  },
} satisfies Meta<typeof SearchComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ManyCities: Story = {
  args: {
    items: [
      ...cityOptions,
      { id: "tokyo", name: "Tokyo, Japan" },
      { id: "madrid", name: "Madrid, Spain" },
      { id: "rome", name: "Rome, Italy" },
      { id: "dubai", name: "Dubai, United Arab Emirates" },
      { id: "new-york", name: "New York, United States" },
    ],
  },
};

export const Mobile: Story = {
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
