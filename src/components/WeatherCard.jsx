import { getWeatherInfo } from "../utils/weatherCodes";

function WeatherCard({ name, country, current }) {
  const {
    temperature_2m,
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    surface_pressure,
    weather_code,
    is_day,
  } = current;

  const { description, image } = getWeatherInfo(weather_code, is_day);

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-blue-100 p-5 sm:p-6 md:p-8 text-slate-800">
      <p className="text-sm sm:text-base font-medium text-slate-500">
        {name}, {country}
      </p>

      <div className="flex items-center justify-between mt-2 gap-4">
        <div>
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-slate-800">
            {temperature_2m.toFixed(1)}°
          </p>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">{description}</p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Feels like {apparent_temperature.toFixed(1)}°C
          </p>
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <img
            src={image}
            alt={description}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-4 border-t border-slate-300">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400">Humidity</p>
          <p className="text-base sm:text-lg font-semibold text-slate-800">{relative_humidity_2m}%</p>
        </div>
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400">Wind</p>
          <p className="text-base sm:text-lg font-semibold text-slate-800">{wind_speed_10m.toFixed(1)} km/h</p>
        </div>
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400">Pressure</p>
          <p className="text-base sm:text-lg font-semibold text-slate-800">{surface_pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;