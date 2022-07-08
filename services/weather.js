import axios from 'axios';

const apiKey = 'e5e2ab54cb1b8ea725a2d58b6beca2ec';

const baseUrl = (query, cityName) =>
  `https://api.openweathermap.org/data/2.5/${query}?q=${cityName}&appid=${apiKey}&units=metric`;

const iconUrl = (iconCode) =>
  `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

export const getWeatherByCity = async (city) => {
  const { data: res } = await axios.get(baseUrl('weather', city));
  return res;
};

export const getForecastByCity = async (city) => {
  const { data: res } = await axios.get(baseUrl('forecast', city));
  return res;
};

export const getWeatherIcon = (iconCode) => iconUrl(iconCode);
