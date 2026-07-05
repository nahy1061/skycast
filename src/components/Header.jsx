import logo from "../assets/logo/sky_cast_logo.png";
import { useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={logo}
            alt="SkyCast logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              SkyCast
            </h1>
            <p
              className="text-xs sm:text-sm text-slate-400 tracking-wide"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Know before you go
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600">
              <path d="M21.75 15.5A9.719 9.719 0 0 1 14 19.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.203 2.665-7.79 6.398-9.17a.75.75 0 0 1 .944.944A8.25 8.25 0 0 0 21.5 14.556a.75.75 0 0 1 .944.944 9.7 9.7 0 0 1-.694 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
