import { getCurrentHourIndex } from "../utils/formatDate";
import HourlyCard from "./HourlyCard";

const HourlyForecast = ({ hourly, currentTime }) => {
  const { time, temperature_2m, weather_code, is_day } = hourly;

  const startIndex = getCurrentHourIndex(currentTime); //get hour from current time
  const hoursToShow = 12;

  // try slicing time, temperature_2m, weather_code & is_day
  const slicedTime = time.slice(startIndex, startIndex + hoursToShow);
  const slicedTemperature = temperature_2m.slice(startIndex, startIndex + hoursToShow,);
  const slicedWeatherCode = weather_code.slice(
    startIndex,
    startIndex + hoursToShow,
  );
  const slicedIsDay = is_day.slice(startIndex, startIndex + hoursToShow);

  // using startIndex and startIndex + hoursToShow

  return (
    <div className="bg-white/60 rounded-2xl p-4 sm:p-5">
      <p className="text-sm sm:text-base font-medium text-slate-600 mb-3">
        Hourly Forecast
      </p>
      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-1">
        {/* map over the sliced arrays here, same pattern as FiveDayForecast */}
        {slicedTime.map((el, index) => (
          <HourlyCard 
            key={el}
            time={el}
            temp={slicedTemperature[index]}
            weatherCode={slicedWeatherCode[index]}
            isDay={slicedIsDay[index]}
            />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
