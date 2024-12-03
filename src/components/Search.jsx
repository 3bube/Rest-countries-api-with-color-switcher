import { useState } from "react";
import { Search as SearchIcon, ChevronDown } from "lucide-react";
import { useCountries } from "../context/CountriesContext";

function Search() {
  const { searchTerm, setSearchTerm, selectedRegion, setSelectedRegion } =
    useCountries();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 flex md:flex-row flex-col gap-7 md:gap-0 items-start md:items-center justify-between">
      <div className="relative w-full md:w-1/3">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <SearchIcon className="text-input-light dark:text-white" size={20} />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a country..."
          className="w-full max-w-md pl-14 pr-4 py-4 rounded-lg shadow-md bg-white dark:bg-elements-dark text-text-light dark:text-white placeholder:text-input-light dark:placeholder:text-white outline-none"
        />
      </div>

      {/* Filter button */}
      <div className="relative">
        <button
          className="bg-white dark:bg-elements-dark rounded-lg mt-4 flex items-center justify-between gap-2 text-text-light dark:text-white shadow-md px-7 py-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedRegion || "Filter by region"}</span>
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            } text-text-light dark:text-white`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 bg-white dark:bg-elements-dark shadow-md rounded-lg px-9 py-4 w-full mt-1 flex flex-col items-start gap-1">
            <button
              className="block w-full text-left text-text-light dark:text-white hover:opacity-75"
              onClick={() => {
                setSelectedRegion("");
                setIsOpen(false);
              }}
            >
              All
            </button>
            {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <button
                  key={region}
                  className="block w-full text-left text-text-light dark:text-white hover:opacity-75"
                  onClick={() => {
                    setSelectedRegion(region);
                    setIsOpen(false);
                  }}
                >
                  {region}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
