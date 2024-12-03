import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCountries } from "../context/CountriesContext";

function CountryDetails() {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const { countries } = useCountries();

  const country = countries.find(
    (c) => c.alpha3Code.toLowerCase() === countryCode.toLowerCase()
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-16 px-8 py-2 bg-white dark:bg-elements-dark  shadow rounded-lg flex items-center gap-2 text-text-light dark:text-white hover:opacity-75 transition-opacity"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full shadow-md"
        />

        <div className="text-text-light dark:text-white">
          <h1 className="text-3xl font-bold mb-8">{country.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {country.currencies?.map((c) => c.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {country.languages?.map((l) => l.name).join(", ")}
              </p>
            </div>
          </div>

          {country.borders && (
            <div>
              <p className="font-semibold mb-4">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((border) => {
                  const borderCountry = countries.find(
                    (c) => c.alpha3Code === border
                  );
                  return (
                    <button
                      key={border}
                      onClick={() =>
                        navigate(`/country/${border.toLowerCase()}`)
                      }
                      className="px-6 py-1 bg-white dark:bg-elements-dark shadow-md rounded text-sm hover:opacity-75 transition-opacity"
                    >
                      {borderCountry?.name || border}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
