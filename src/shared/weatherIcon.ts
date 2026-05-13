export const weatherIcons = {
  sunny: {
    label: "Sunny",
    src: "/assets/images/icon-sunny.webp",
    alt: "Sunny weather",
  },
  drizzle: {
    label: "Drizzle",
    src: "/assets/images/icon-drizzle.webp",
    alt: "Drizzle weather",
  },
  fog: {
    label: "Fog",
    src: "/assets/images/icon-fog.webp",
    alt: "Foggy weather",
  },
  overcast: {
    label: "Overcast",
    src: "/assets/images/icon-overcast.webp",
    alt: "Overcast weather",
  },
  partlyCloudy: {
    label: "Partly Cloudy",
    src: "/assets/images/icon-partly-cloudy.webp",
    alt: "Partly cloudy weather",
  },
  rain: {
    label: "Rain",
    src: "/assets/images/icon-rain.webp",
    alt: "Rainy weather",
  },
  storm: {
    label: "Storm",
    src: "/assets/images/icon-storm.webp",
    alt: "Stormy weather",
  },
  snow: {
    label: "Snow",
    src: "/assets/images/icon-snow.webp",
    alt: "Snowy weather",
  },
} as const;

export type WeatherIconKey = keyof typeof weatherIcons;

export const weatherIconOptions = Object.keys(weatherIcons) as WeatherIconKey[];