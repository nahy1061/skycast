const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// 1. Takes a city name, returns { latitude, longitude, name, country }

export async function getCoordinates(city) {
  // fetch GEOCODING_URL with ?name=city
  let response = await fetch(`${GEOCODING_URL}?name=${encodeURIComponent(city)}`);

  // parse the response as JSON
  let data = await response.json();

  // if no results (or empty results array) → throw new Error("City not found")
if (!data.results || data.results.length === 0)
    throw new Error("City not found");
  
  // otherwise return the first result
  return data.results[0];
}

// 2. Takes latitude/longitude, returns the current + daily weather object

export async function getWeather(latitude, longitude) {
  // build the forecast URL using latitude, longitude, and the current/daily params
  let response = await fetch(`${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,is_day,surface_pressure,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,weather_code,sunrise,sunset&hourly=temperature_2m,weather_code,precipitation_probability,is_day&timezone=auto`);

  // fetch it, parse JSON
  let data = await response.json();

  // return the data (or just the parts you need: data.current and data.daily)
  return [data.current, data.daily, data.hourly];
}

// 3. Combines both — this is what your component will actually call

export async function fetchWeatherByCity(city) {
  // call getCoordinates(city)
    const { latitude, longitude, name, country } = await getCoordinates(city);

  // call getWeather() using the lat/lon you got back
    const [current, daily, hourly] = await getWeather(latitude, longitude);

  // return everything the UI needs: city name, country, current, daily
    return { name, country, current, daily, hourly };
}