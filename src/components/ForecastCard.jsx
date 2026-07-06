import { getWeatherInfo } from "../utils/weatherCodes";
import { getDayName } from "../utils/formatDate";

function ForecastCard({ date, maxTemp, minTemp, weatherCode }) {
  const dayName = getDayName(date);
  const { description, image } = getWeatherInfo(weatherCode, true);

  return (
    <div className="shrink-0 w-20 sm:w-auto bg-white rounded-xl shadow-sm p-3 sm:p-4 text-center">
      <p className="text-xs sm:text-sm font-medium text-slate-600">{dayName}</p>
      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto my-1.5">
        <img src={image} alt={description} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      </div>
      <p className="text-xs sm:text-sm">
        <span className="font-semibold text-slate-800">{Math.round(maxTemp)}°</span>{" "}
        <span className="text-slate-400">{Math.round(minTemp)}°</span>
      </p>
    </div>
  );
}

export default ForecastCard;