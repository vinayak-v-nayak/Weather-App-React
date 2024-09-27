import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchClimateDetails } from '../utils/api';
import CurrentWeather from './CurrentWeather';
import '../styles/WeatherApp.css';

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await fetchCurrentWeather('Mangaluru');
        setCurrentWeather(weatherData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <CurrentWeather data={currentWeather} />
    </div>
  );
};

export default WeatherApp;
