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
  } = current; // destructuring the current weather object to extract relevant properties

  const { description, image } = getWeatherInfo(weather_code, is_day);

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md text-center">
      <p>
        {name}, {country}
      </p>

      <img src={image} alt={description} />
      <p>{temperature_2m.toFixed(1)}°C</p>
      <p>{description}</p>
      <p>Feels like {apparent_temperature.toFixed(1)}°C</p>

      <div>
        <p>Humidity: {relative_humidity_2m}%</p>
        <p>Wind: {wind_speed_10m.toFixed(1)} km/h</p>
        <p>Pressure: {surface_pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherCard;
