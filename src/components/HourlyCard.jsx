import { getHourLabel } from "../utils/formatDate";
import { getWeatherInfo } from "../utils/weatherCodes";

function HourlyCard({ time, temp, weatherCode, isDay }) {
  const hour = getHourLabel(time);
  const { description, icon: WeatherIcon } = getWeatherInfo(weatherCode, isDay);

  return (
    <div className="shrink-0 w-16 sm:w-20 bg-white rounded-xl shadow-sm p-3 text-center">
      <p className="text-xs sm:text-sm font-medium text-slate-600">{hour}</p>
      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-200 rounded-full flex items-center justify-center mx-auto my-1.5">
        <WeatherIcon className="w-6 h-6 text-blue-500" />
      </div>
      <p className="text-xs sm:text-sm font-semibold text-slate-800">
        {Math.round(temp)}°
      </p>
    </div>
  );
}

export default HourlyCard;