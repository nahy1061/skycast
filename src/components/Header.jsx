import logo from "../assets/logo/sky_cast_logo.png";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
