import { getWeatherInfo } from "../utils/weatherCodes";
import { useTheme } from "./ThemeContext";

function WeatherCard({ name, country, current }) {
  const { isDark } = useTheme();
  const {
    temperature_2m,
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    surface_pressure,
    weather_code,
    is_day,
  } = current;

  const { description, icon: WeatherIcon } = getWeatherInfo(
    weather_code,
    is_day,
  );

  return (
    <div
      className={`max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto backdrop-blur-sm rounded-2xl shadow-xl ring-1 p-5 sm:p-6 md:p-8 transition-all duration-300 ${
        isDark
          ? "bg-slate-800/80 ring-blue-700/30 text-cyan-100 hover:ring-blue-600/50"
          : "bg-white/90 ring-blue-100 text-slate-800"
      }`}
    >
      <p
        className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isDark ? "text-blue-300/70" : "text-slate-500"}`}
      >
        {name}, {country}
      </p>

      <div className="flex items-center justify-between mt-2 gap-4">
        <div>
          <p
            className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-none transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-800"}`}
          >
            {temperature_2m.toFixed(1)}°
          </p>
          <p
            className={`mt-2 text-base sm:text-lg transition-colors duration-300 ${isDark ? "text-blue-200" : "text-slate-600"}`}
          >
            {description}
          </p>
          <p
            className={`text-xs sm:text-sm mt-1 transition-colors duration-300 ${isDark ? "text-blue-300/60" : "text-slate-400"}`}
          >
            Feels like {apparent_temperature.toFixed(1)}°C
          </p>
        </div>
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isDark ? "bg-blue-900/40 ring-1 ring-blue-700/30" : "bg-blue-100"
          }`}
        >
          <WeatherIcon
            className={`w-14 h-14 sm:w-16 sm:h-16 transition-colors duration-300 ${isDark ? "text-cyan-300" : "text-blue-500"}`}
          />
        </div>
      </div>

      <div
        className={`grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-4 transition-colors duration-300 ${isDark ? "border-t border-blue-700/20" : "border-t border-slate-300"}`}
      >
        <div className="text-center">
          <p
            className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? "text-blue-300/60" : "text-slate-400"}`}
          >
            Humidity
          </p>
          <p
            className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-800"}`}
          >
            {relative_humidity_2m}%
          </p>
        </div>
        <div className="text-center">
          <p
            className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? "text-blue-300/60" : "text-slate-400"}`}
          >
            Wind
          </p>
          <p
            className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-800"}`}
          >
            {wind_speed_10m.toFixed(1)} km/h
          </p>
        </div>
        <div className="text-center">
          <p
            className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? "text-blue-300/60" : "text-slate-400"}`}
          >
            Pressure
          </p>
          <p
            className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-800"}`}
          >
            {surface_pressure} hPa
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
