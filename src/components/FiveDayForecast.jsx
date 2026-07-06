import ForecastCard from "./ForecastCard";
import { useTheme } from "./ThemeContext";

const FiveDayForecast = ({ daily }) => {
  const { isDark } = useTheme();
  const { time, temperature_2m_max, temperature_2m_min, weather_code } = daily;

  return (
    <div
      className={`bg-linear-to-br rounded-2xl p-4 sm:p-5 transition-colors duration-300 ${
        isDark ? "bg-slate-800/50 border border-blue-700/20" : "bg-slate-50"
      }`}
    >
      <p
        className={`text-sm sm:text-base font-medium mb-3 transition-colors duration-300 ${isDark ? "text-cyan-200" : "text-slate-600"}`}
      >
        5-Day Forecast
      </p>
      <div className="flex sm:grid sm:grid-cols-5 gap-3 overflow-x-auto scrollbar-none sm:overflow-visible pb-1 sm:pb-0">
        {time.slice(0, 5).map((date, index) => (
          <ForecastCard
            key={date}
            date={date}
            maxTemp={temperature_2m_max[index]}
            minTemp={temperature_2m_min[index]}
            weatherCode={weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
