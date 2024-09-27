const API_KEY = '8a0b526caaa963c976fce0199bbbc489';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Weather data fetch failed');
  return response.json();
};
