const search_countries = "https://geocoding-api.open-meteo.com/v1/search";

import { useQuery } from "@tanstack/react-query";

const fetchCountries = async (query: string = "") => {
  const response = await fetch(search_countries + `?name=${query}&count=10`);
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data = await response.json();
  return data;
};

export const useCountries = (query: string = "") => {
  return useQuery({
    queryKey: ["countries", query],
    queryFn: () => fetchCountries(query),
    enabled: query.length > 0,
  });
};
