import { useTheme } from "./ThemeContext";

function RecentSearches({ searches, onSelect }) {
  const { isDark } = useTheme();

  if (searches.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap ${isDark ? "text-slate-400" : "text-slate-400"}`}
      >
        Recent:
      </span>
      <div className="flex gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0 scrollbar-none">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className={`text-xs sm:text-sm rounded-full px-3 py-1 transition-all duration-300 whitespace-nowrap shrink-0 ${
              isDark
                ? "bg-blue-900/40 border border-blue-700/40 text-cyan-100 hover:bg-blue-800/60 hover:border-blue-600/60"
                : "bg-white/80 border border-slate-200 text-slate-600 hover:bg-white"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
