import { getWeatherInfo } from "../utils/weatherCodes";
import { getDayName } from "../utils/formatDate";

function ForecastCard({ date, maxTemp, minTemp, weatherCode }) {
  const dayName = getDayName(date);
  const { description, icon: WeatherIcon } = getWeatherInfo(weatherCode, true);

  return (
    <div className="shrink-0 w-20 sm:w-auto bg-white rounded-xl shadow-sm p-3 sm:p-4 text-center">
      <p className="text-xs sm:text-sm font-medium text-slate-600">{dayName}</p>
      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto my-1.5">
        <WeatherIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
      </div>
      <p className="text-xs sm:text-sm">
        <span className="font-semibold text-slate-800">
          {Math.round(maxTemp)}°
        </span>{" "}
        <span className="text-slate-400">{Math.round(minTemp)}°</span>
      </p>
    </div>
  );
}

export default ForecastCard;
