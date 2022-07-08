import React from 'react';
import axios from 'axios';
import { wrapper } from '../store/configStore';
import {
  setSelectedCity,
  setForecast,
  setSelectedDate,
} from '../store/actions';
import {
  getWeatherByCity,
  getForecastByCity,
} from '../services/weather';
import { CITIES } from '../utils/constants';
import {cityFormatter} from '../utils/formatter';
import Main from '../components/main'

export default function city() {
  return <Main />;
}

export const getStaticPaths = async () => {
  const urls = CITIES.map((city) => {return {url: city.url, cityName: city.name}});
  
  const paths = urls.map(({url, cityName}) => ({
    params: { city: url, id: cityName },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  //format data to fetch
  const cityToFetch = cityFormatter(params.city); 
  //fetching data
  const cityWeather = await getWeatherByCity(cityToFetch);
  const forecast = await getForecastByCity(cityToFetch);
  //save data in store
  store.dispatch(setSelectedCity(cityWeather));
  store.dispatch(setForecast(forecast));
  store.dispatch(setSelectedDate(new Date().toString()));
});
