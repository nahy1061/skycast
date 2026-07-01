import React from "react";
import { fetchWeatherByCity } from "./services/weatherApi";

const App = () => {
  const getWeatherDetails = async () => {
    const data = await fetchWeatherByCity("Rawalpindi");
    console.log(data);
  };

  return (
    <div>
      <button onClick={getWeatherDetails} className="bg-green-400 rounded-2xl p-4">Get Data</button>
    </div>
  );
};

export default App;
