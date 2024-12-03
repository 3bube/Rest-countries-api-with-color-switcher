import { createContext, useContext, useState } from "react";
import countriesData from "../../data.json";

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = countriesData.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <CountriesContext.Provider
      value={{
        countries: filteredCountries,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
}
