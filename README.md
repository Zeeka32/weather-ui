# Weather Now

A responsive weather dashboard built for the [Frontend Mentor Weather App challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Search for a city, inspect current conditions and forecasts, and display the data in your preferred measurement units.

![Weather Now project preview](./preview.jpg)

## Features

- Debounced location search with suggestions from the Open-Meteo Geocoding API
- Current temperature, conditions, location, date, and weather icon
- Feels-like temperature, humidity, wind speed, and precipitation metrics
- Six-day forecast with daily high and low temperatures
- Hourly forecasts grouped by day with a day selector
- Metric and imperial presets
- Independent controls for temperature, wind speed, and precipitation units
- Loading, empty-search, and API error states
- Responsive layouts for mobile and desktop screens
- Keyboard-accessible search, select, button, dialog, and popover interactions

## Built with

- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for local development and production builds
- [TanStack Query](https://tanstack.com/query/latest) for server-state fetching and caching
- [Open-Meteo](https://open-meteo.com/) for geocoding and weather data
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) for accessible UI primitives
- CSS Modules, SCSS, CSS custom properties, Flexbox, Grid, and [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/) for isolated component development
- [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/) for test tooling
- [ESLint](https://eslint.org/) for static analysis

## Getting started

### Prerequisites

- Node.js `20.19+` or `22.12+`
- npm

### Installation

```bash
git clone https://github.com/Zeeka32/weather-ui.git
cd weather-ui
npm install
npm run dev
```

Vite will print the local development URL in the terminal. No environment variables or API key are required because Open-Meteo provides the data used by this project without authentication.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the app and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Create a static Storybook build |

## How it works

The search field waits briefly after input before querying Open-Meteo's geocoding endpoint. Selecting a result supplies the coordinates used for the forecast request. TanStack Query caches both request types for five minutes and exposes their loading and error states to the interface.

Weather responses are normalized in a dedicated parser before they reach the presentation components. The parser groups hourly observations by date, maps WMO weather codes to local icons, formats dates and times, and converts values whenever the selected units change. Shared context keeps the selected city, raw response, parsed forecast, and unit preferences synchronized across the app.

## Project structure

```text
src/
├── components/
│   ├── Header/
│   ├── Main/
│   └── ui/             Reusable forecast, search, select, and unit components
├── shared/
│   ├── api.tsx         Open-Meteo queries
│   ├── contexts.tsx    Shared weather context
│   ├── providers.tsx   Application state and derived forecast data
│   ├── weatherIcon.ts  Weather icon definitions
│   └── weatherParser.ts
├── App.tsx
└── main.tsx
```

Component stories live beside their components, and forecast parsing/conversion tests live in `src/shared/weatherParser.test.ts`.

## API

This project uses two Open-Meteo services:

- [Geocoding API](https://open-meteo.com/en/docs/geocoding-api) for matching search text to locations
- [Weather Forecast API](https://open-meteo.com/en/docs) for current, hourly, and daily conditions

## Links

- [Live site](https://weather-ui-vert.vercel.app/)
- [Source code](https://github.com/Zeeka32/weather-ui)

## Author

- GitHub: [@Zeeka32](https://github.com/Zeeka32)
