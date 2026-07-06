import logo from "../assets/logo/sky_cast_logo.png";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeContext";

function Header() {
  const { isDark } = useTheme();

  return (
    <header
      className={`w-full transition-colors duration-300 ${
        isDark
          ? "bg-slate-900/90 backdrop-blur-sm border-b border-blue-900/30 shadow-lg shadow-black/20"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={logo}
            alt="SkyCast logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <div className="flex flex-col">
            <h1
              className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${isDark ? "text-cyan-100" : "text-slate-800"}`}
            >
              SkyCast
            </h1>
            <p
              className={`text-xs sm:text-sm tracking-wide transition-colors duration-300 ${isDark ? "text-blue-300/70" : "text-slate-400"}`}
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
