import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);

    if (city.trim() !== "") {
    setCity("");
    }
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
          className="shrink-0 bg-linear-to-r from-[#185FA5] to-[#378ADD] hover:from-[#0C447C] hover:to-[#185FA5] text-white text-sm sm:text-base font-medium px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
