import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import FiveDayForecast from "../components/FiveDayForecast";
import { getRecentSearches, addRecentSearch } from "../utils/recentSearches";
import RecentSearches from "../components/RecentSearches";
import { useTheme } from "../components/ThemeContext"; // Import the useTheme hook

const Home = () => {

  const { isDark } = useTheme(); // Use the theme context to apply the current theme

  // State variables for weather data, loading state, error state, and recent searches
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const getWeatherDetails = async (city) => {
    // Validate the city input (empty Search)
    if(!city || city.trim()==="") {
      setError("Please enter a city name.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchWeatherByCity(city);
      setWeatherData(response);
      setRecentSearches(addRecentSearch(city)); // Update recent searches after a successful fetch
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch recent searches and default weather data for "Rawalpindi" on component mount
  useEffect(() => {
    setRecentSearches(getRecentSearches());
    getWeatherDetails("Rawalpindi");
  }, []);

  // Function to render content based on the current state (loading, error, or weather data)
  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    if (weatherData)
      return (
        <>
          <WeatherCard
            name={weatherData.name}
            country={weatherData.country}
            current={weatherData.current}
          />
          <FiveDayForecast daily={weatherData.daily} />
        </>
      );
    return null;
  };

  return (
    // <div className="min-h-screen bg-linear-to-br from-blue-100 via-slate-100 to-slate-200">
    // <div className="min-h-screen bg-linear-to-br from-[#042C53] via-[#185FA5] to-[#378ADD]">
    <div className={`min-h-screen transition-colors duration-300 ${
  isDark
    ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-linear-to-br from-[#042C53] via-[#185FA5] to-[#378ADD]"
}`}>
      <Header />
      <main className="max-w-xl mx-auto px-4 py-6 sm:py-8 space-y-6">
        <SearchBar onSearch={getWeatherDetails} />
        <RecentSearches searches={recentSearches} onSelect={getWeatherDetails} />
        {renderContent()}
      </main>
    </div>
  );
};

export default Home;
