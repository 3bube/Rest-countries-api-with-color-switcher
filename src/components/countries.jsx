import React from "react";
import { useCountries } from "../context/CountriesContext";
import CountriesCard from "./countriesCard";

function Countries() {
  const { countries } = useCountries();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {countries.map((country) => (
          <CountriesCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
