import { getWeatherInfo } from "../utils/weatherCodes";
import { getDayName } from "../utils/formatDate";
import { useTheme } from "./ThemeContext";

function ForecastCard({ date, maxTemp, minTemp, weatherCode }) {
  const { isDark } = useTheme();
  const dayName = getDayName(date);
  const { description, icon: WeatherIcon } = getWeatherInfo(weatherCode, true);

  return (
    <div
      className={`shrink-0 w-20 sm:w-auto rounded-xl shadow-sm p-3 sm:p-4 text-center transition-all duration-300 ${
        isDark
          ? "bg-slate-700/60 border border-blue-700/30 hover:border-blue-600/50"
          : "bg-white"
      }`}
    >
      <p
        className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${isDark ? "text-blue-200" : "text-slate-600"}`}
      >
        {dayName}
      </p>
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto my-1.5 transition-all duration-300 ${
          isDark ? "bg-blue-900/40 ring-1 ring-blue-700/30" : "bg-blue-100"
        }`}
      >
        <WeatherIcon
          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${isDark ? "text-cyan-300" : "text-blue-500"}`}
        />
      </div>
      <p
        className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? "text-blue-100" : ""}`}
      >
        <span
          className={`font-semibold transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-800"}`}
        >
          {Math.round(maxTemp)}°
        </span>{" "}
        <span
          className={`transition-colors duration-300 ${isDark ? "text-blue-300/60" : "text-slate-400"}`}
        >
          {Math.round(minTemp)}°
        </span>
      </p>
    </div>
  );
}

export default ForecastCard;
