import { getHourLabel } from "../utils/formatDate";
import { getWeatherInfo } from "../utils/weatherCodes";
import { useTheme } from "./ThemeContext";

function HourlyCard({ time, temp, weatherCode, isDay }) {
  const { isDark } = useTheme();
  const hour = getHourLabel(time);
  const { description, icon: WeatherIcon } = getWeatherInfo(weatherCode, isDay);

  return (
    <div
      className={`shrink-0 w-16 sm:w-20 rounded-xl shadow-sm p-3 text-center transition-all duration-300 ${
        isDark
          ? "bg-slate-700/60 border border-blue-700/30 hover:border-blue-600/50"
          : "bg-white"
      }`}
    >
      <p
        className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
          isDark ? "text-blue-200" : "text-slate-600"
        }`}
      >
        {hour}
      </p>
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto my-1.5 transition-all duration-300 ${
          isDark ? "bg-blue-900/40 ring-1 ring-blue-700/30" : "bg-blue-100"
        }`}
      >
        <WeatherIcon
          className={`w-6 h-6 transition-colors duration-300 ${
            isDark ? "text-cyan-300" : "text-blue-500"
          }`}
        />
      </div>
      <p
        className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${
          isDark ? "text-cyan-200" : "text-slate-800"
        }`}
      >
        {Math.round(temp)}°
      </p>
    </div>
  );
}

export default HourlyCard;
