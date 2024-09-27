import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <div className="temperature">{Math.round(data.main.temp)}°C</div>
      <div className="description">{data.weather[0].description}</div>
      <div className="details">
        <span>Humidity: {data.main.humidity}%</span>
        <span>Wind: {data.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default CurrentWeather;