import type { Meta, StoryObj } from "@storybook/react-vite";
import { UnitsDropdown } from "./UnitsDropdown";
import { WeatherAppProvider } from "../../../shared/providers";
import { expect, userEvent, within } from "storybook/test";

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
  decorators: [(Story) => <Story />],
};

export const InNavbar: Story = {
  decorators: [
    (Story) => (
      <nav className="flex items-center justify-between rounded-2xl px-6 py-4">
        <img src="/assets/images/logo.svg" alt="Logo" className="h-10 w-auto" />

        <div className="flex items-center gap-3">
          <Story />
        </div>
      </nav>
    ),
  ],
};

export const MobileWidth: Story = {
  decorators: [(Story) => <Story />],
};

export const OpenAndChangeUnits: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", {
        name: /units/i,
      }),
    );

    const page = within(document.body);

    await expect(await page.findByText("Temperature")).toBeInTheDocument();

    await userEvent.click(
      page.getByRole("button", {
        name: /switch to imperial/i,
      }),
    );

    await expect(
      page.getByRole("button", {
        name: /switch to metric/i,
      }),
    ).toBeInTheDocument();

    await userEvent.click(
      page.getByRole("button", {
        name: /fahrenheit/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /mph/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /inches/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /switch to metric/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /celsius/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /km\/h/i,
      }),
    );

    await userEvent.click(
      page.getByRole("button", {
        name: /millimeters/i,
      }),
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
