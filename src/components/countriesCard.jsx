import React from "react";
import { useNavigate } from "react-router-dom";

function CountriesCard({ country }) {
  const navigate = useNavigate();

  const { name, population, region, capital, flags, alpha3Code } = country;
  return (
    <div
      onClick={() => navigate(`/country/${alpha3Code.toLowerCase()}`)}
      className="bg-white dark:bg-elements-dark rounded-lg shadow-md overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer w-full"
    >
      <img
        src={flags.png}
        alt={`${name} flag`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="font-bold text-lg mb-4 text-text-light dark:text-white">
          {name}
        </h2>
        <div className="space-y-2 text-sm text-text-light dark:text-white">
          <p>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountriesCard;
