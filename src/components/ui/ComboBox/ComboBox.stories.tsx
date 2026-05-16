import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchComboBox, type CityOption } from "./ComboBox";

const cityOptions: CityOption[] = [
  {
    id: "berlin",
    name: "Berlin, Germany",
    latitude: 52.52,
    longitude: 13.405,
    timezone: "Europe/Berlin",
    country: "Germany",
  },
  {
    id: "cairo",
    name: "Cairo, Egypt",
    latitude: 30.0444,
    longitude: 31.2357,
    timezone: "Africa/Cairo",
    country: "Egypt",
    admin1: "Cairo Governorate",
  },
  {
    id: "london",
    name: "London, United Kingdom",
    latitude: 51.5072,
    longitude: -0.1276,
    timezone: "Europe/London",
    country: "United Kingdom",
  },
  {
    id: "paris",
    name: "Paris, France",
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: "Europe/Paris",
    country: "France",
  },
  {
    id: "amsterdam",
    name: "Amsterdam, Netherlands",
    latitude: 52.3676,
    longitude: 4.9041,
    timezone: "Europe/Amsterdam",
    country: "Netherlands",
  },
  {
    id: "san-francisco",
    name: "San Francisco, United States",
    latitude: 37.7749,
    longitude: -122.4194,
    timezone: "America/Los_Angeles",
    country: "United States",
    admin1: "California",
  },
  {
    id: "oslo",
    name: "Oslo, Norway",
    latitude: 59.9139,
    longitude: 10.7522,
    timezone: "Europe/Oslo",
    country: "Norway",
  },
];

type SearchComboBoxStoryProps = {
  items: CityOption[];
  placeholder?: string;
  label?: string;
};

function ControlledSearchComboBox({
  items,
  placeholder,
  label,
}: SearchComboBoxStoryProps) {
  const [value, setValue] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <SearchComboBox
      value={value}
      selectedKey={selectedKey}
      items={items}
      placeholder={placeholder}
      label={label}
      onInputChange={(nextValue) => {
        setValue(nextValue);
        setSelectedKey(null);
      }}
      onSelectionChange={(key) => {
        const selectedCity = items.find((city) => city.id === key);

        if (!selectedCity) return;

        setSelectedKey(String(key));
        setValue(selectedCity.name);
      }}
    />
  );
}

const meta = {
  title: "Components/SearchComboBox",
  component: ControlledSearchComboBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A controlled city search ComboBox built with React Aria. It lets users type a location and choose a matching city.",
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
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <Story />
        </div>
      </main>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "Accessible label for the ComboBox.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown inside the input.",
    },
    items: {
      control: "object",
      description: "List of city options displayed in the dropdown.",
    },
  },
  args: {
    items: cityOptions,
    placeholder: "Search for a place...",
    label: "Search city",
  },
} satisfies Meta<typeof ControlledSearchComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default city search ComboBox with a small list of locations.",
      },
    },
  },
};

export const ManyCities: Story = {
  args: {
    items: [
      ...cityOptions,
      {
        id: "tokyo",
        name: "Tokyo, Japan",
        latitude: 35.6762,
        longitude: 139.6503,
        timezone: "Asia/Tokyo",
        country: "Japan",
      },
      {
        id: "madrid",
        name: "Madrid, Spain",
        latitude: 40.4168,
        longitude: -3.7038,
        timezone: "Europe/Madrid",
        country: "Spain",
      },
      {
        id: "rome",
        name: "Rome, Italy",
        latitude: 41.9028,
        longitude: 12.4964,
        timezone: "Europe/Rome",
        country: "Italy",
      },
      {
        id: "dubai",
        name: "Dubai, United Arab Emirates",
        latitude: 25.2048,
        longitude: 55.2708,
        timezone: "Asia/Dubai",
        country: "United Arab Emirates",
      },
      {
        id: "new-york",
        name: "New York, United States",
        latitude: 40.7128,
        longitude: -74.006,
        timezone: "America/New_York",
        country: "United States",
        admin1: "New York",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the ComboBox with a larger list of cities.",
      },
    },
  },
};

export const EmptyResults: Story = {
  args: {
    items: [],
    placeholder: "Search for a place...",
    label: "Search city",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the ComboBox when no city results are available.",
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    items: cityOptions,
    placeholder: "Search for a place...",
    label: "Search city",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Mobile-width wrapper for checking narrow layout behavior.",
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
