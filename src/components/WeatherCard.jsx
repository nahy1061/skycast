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
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-linear-to-br from-sky-600 to-indigo-600 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 text-white">
      <p className="text-sm sm:text-base font-medium text-blue-100">
        {name}, {country}
      </p>

      <div className="flex items-center justify-between mt-2 gap-4">
        <div>
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none">
            {temperature_2m.toFixed(1)}°
          </p>
          <p className="text-blue-100 mt-2 text-base sm:text-lg">{description}</p>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Feels like {apparent_temperature.toFixed(1)}°C
          </p>
        </div>
        <img
          src={image}
          alt={description}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain shrink-0"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-4 border-t border-blue-300/40">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-blue-100">Humidity</p>
          <p className="text-base sm:text-lg font-semibold">{relative_humidity_2m}%</p>
        </div>
        <div className="text-center">
          <p className="text-xs sm:text-sm text-blue-100">Wind</p>
          <p className="text-base sm:text-lg font-semibold">{wind_speed_10m.toFixed(1)} km/h</p>
        </div>
        <div className="text-center">
          <p className="text-xs sm:text-sm text-blue-100">Pressure</p>
          <p className="text-base sm:text-lg font-semibold">{surface_pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;