import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [inputError, setInputError] = useState("");

   const handleChange = (e) => {
    setCity(e.target.value);
    if (inputError) setInputError(""); // clear error as soon as they start typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if (city.trim() === "") {
      setInputError("Please enter a city name.");
      return;
    }
    setInputError("");
    onSearch(city);
    setCity("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 bg-white border border-slate-200 rounded-full shadow-sm px-2 py-1.5 sm:px-3 sm:py-2"
      >
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Search for a city"
          className="flex-1 min-w-0 bg-transparent px-2 sm:px-3 py-1.5 text-sm sm:text-base text-slate-700 placeholder-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors"
        >
          Search
        </button>
      </form>

      {inputError && (
        <div className="mt-2">
          <ErrorMessage message={inputError} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;