import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [uiData, setUiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherDetails = async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchWeatherByCity(city);
      setUiData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeatherDetails("Rawalpindi");
  }, []);

  const renderContent = () => {
  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (uiData) return (
    <WeatherCard
      name={uiData.name}
      country={uiData.country}
      current={uiData.current}
    />
  );
  return null;
};

  return (
    <main className="max-w-xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      <Header />
      <SearchBar onSearch={getWeatherDetails} />
      {renderContent()}
    </main>
  );
};

export default Home;

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
