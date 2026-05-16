import type { Meta, StoryObj } from "@storybook/react-vite";
import { UnitsDropdown } from "./UnitsDropdown";
import { WeatherAppProvider } from "../../../shared/contexts";

const meta = {
  title: "Components/UnitsDropdown",
  component: UnitsDropdown,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <main className="min-h-screen bg-[#07001f] p-10">
        <WeatherAppProvider>
          <Story />
        </WeatherAppProvider>
      </main>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top start",
        "top",
        "top end",
        "bottom start",
        "bottom",
        "bottom end",
        "left",
        "right",
      ],
    },
  },
  args: {
    placement: "top end",
  },
} satisfies Meta<typeof UnitsDropdown>;

export const Default: Story = {};

export const OnWhiteBackground: Story = {
  decorators: [
    (Story) => (
      <main className="min-h-screen bg-[#ffffff] p-10">
        <WeatherAppProvider>
          <Story />
        </WeatherAppProvider>
      </main>
    ),
  ],
};

export const InNavbar: Story = {
  decorators: [
    (Story) => (
      <main className="min-h-screen bg-[#07001f] p-8">
        <nav className="flex items-center justify-between rounded-2xl px-6 py-4">
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />

          <div className="flex items-center gap-3">
            <WeatherAppProvider>
              <Story />
            </WeatherAppProvider>
          </div>
        </nav>
      </main>
    ),
  ],
};

export const MobileWidth: Story = {
  decorators: [
    (Story) => (
      <main className="flex justify-end min-h-screen w-93.75 bg-[#100044] p-4 ">
        <WeatherAppProvider>
          <Story />
        </WeatherAppProvider>
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;
