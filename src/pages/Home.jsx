import React, { useState, useEffect } from "react";
import { fetchWeatherByCity } from "../services/weatherApi";
import { getWeatherInfo, defaultWeather } from "../utils/weatherCodes";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [info, setInfo] = useState(defaultWeather);
  const [uiData, setUiData] = useState(null);

   const getWeatherDetails = async () => {
    const response = await fetchWeatherByCity("Rawalpindi");
    setUiData(response);
    console.log(response);
  };

  useEffect(() => {
  getWeatherDetails();
}, []);

  return (
    <div>
      {uiData && (
        <WeatherCard name={uiData.name} country={uiData.country} current={uiData.current} />
      )}
    </div>
  );
}

export default Home

  //  {/* Testing Weather Info */}
  //     <button
  //       onClick={() => {
  //         let information = getWeatherInfo(66, true);
  //         console.log(information);
  //         setInfo(information);
  //       }}
  //       className="bg-pink-400 rounded-2xl p-3 m-2"
  //     >
  //       Weather Info
  //     </button>

  //     {info && (
  //       <div>
  //         <p>{info.description}</p>
  //         <img src={info.image} alt="weather" />
  //       </div>
  //     )}