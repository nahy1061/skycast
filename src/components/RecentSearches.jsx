
function RecentSearches({ searches, onSelect }) {
  if (searches.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs sm:text-sm text-slate-400">Recent:</span>
      {searches.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          className="text-xs sm:text-sm bg-white/80 border border-slate-200 rounded-full px-3 py-1 text-slate-600 hover:bg-white transition-colors"
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;