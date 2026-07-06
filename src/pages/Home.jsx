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
import { WiCloud } from "react-icons/wi";

const Home = () => {
  const { isDark } = useTheme(); // Use the theme context to apply the current theme

  // State variables for weather data, loading state, error state, and recent searches
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const getWeatherDetails = async (city) => {
    // Validate the city input (empty Search)
    if (!city || city.trim() === "") {
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
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-br from-[#042C53] via-[#185FA5] to-[#378ADD]"
      }`}
    >
      {/* Decorative floating clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left to right — start off-screen on the LEFT */}
        <WiCloud className="absolute left-[-15%] text-white/25 w-40 h-40 sm:w-56 sm:h-56 top-10 animate-[float-cloud_35s_ease-in-out_infinite]" />
        <WiCloud className="absolute left-[-15%] text-white/20 w-56 h-56 sm:w-72 sm:h-72 top-64 animate-[float-cloud_45s_ease-in-out_infinite] [animation-delay:-15s]" />
        <WiCloud className="absolute left-[-15%] text-white/15 w-32 h-32 sm:w-44 sm:h-44 top-96 animate-[float-cloud_42s_ease-in-out_infinite] [animation-delay:-30s]" />

        {/* Right to left — start off-screen on the RIGHT */}
        <WiCloud className="absolute right-[-15%] text-white/20 w-48 h-48 sm:w-64 sm:h-64 top-32 animate-[float-cloud-reverse_40s_ease-in-out_infinite] [animation-delay:-8s]" />
        <WiCloud className="absolute right-[-15%] text-white/15 w-36 h-36 sm:w-48 sm:h-48 top-96 animate-[float-cloud-reverse_50s_ease-in-out_infinite] [animation-delay:-25s]" />
        <WiCloud className="absolute right-[-15%] text-white/20 w-44 h-44 sm:w-60 sm:h-60 top-112 animate-[float-cloud-reverse_38s_ease-in-out_infinite] [animation-delay:-4s]" />
      </div>

      <Header />
      <main className="relative z-10 max-w-xl mx-auto px-4 py-6 sm:py-8 space-y-6">
        <SearchBar onSearch={getWeatherDetails} />
        <RecentSearches
          searches={recentSearches}
          onSelect={getWeatherDetails}
        />
        {renderContent()}
      </main>
    </div>
  );
};

export default Home;
