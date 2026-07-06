import { useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme(); // Use the context value and toggle function

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`relative w-14 h-8 sm:w-16 sm:h-9 rounded-full transition-colors duration-300 flex items-center px-1 ${
        isDark ? "bg-slate-700" : "bg-blue-400"
      }`}
    >
      <span
        className={`absolute w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
          isDark ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-600">
            <path d="M21.75 15.5A9.719 9.719 0 0 1 14 19.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.203 2.665-7.79 6.398-9.17a.75.75 0 0 1 .944.944A8.25 8.25 0 0 0 21.5 14.556a.75.75 0 0 1 .944.944 9.7 9.7 0 0 1-.694 0Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;