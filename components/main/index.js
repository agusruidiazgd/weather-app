import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewWeather } from '../../store/actions';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Tabs from '../Tabs';
import WeatherCard from '../WeatherCard'
import { getWeatherByCity } from '../../services/weather';

export default function Main() {
  const dispatch = useDispatch();
  const { weatherList } = useSelector((state) => state.weather);
  const [filteredCity, setFilteredCity] = useState([])
  const [value, onChange] = useState(new Date());
  const [tab, setTab] = useState('London');

  // get data and save in the store
  const getCityData = useCallback(async(city) => {
    let weather = await getWeatherByCity(city);
    dispatch(addNewWeather(weather));
    setFilteredCity([weather]);
  },[dispatch])

  useEffect(() => {
    //fetch data weather if I don't find it in my store
    if(weatherList.findIndex(elem => elem.name === tab) === -1){
      getCityData(tab);
    } else {
      // if exists filter the data from the store
      let out = [];
      weatherList.filter((city) => {
        if (city.name === tab) return out.push(city);
      });
      setFilteredCity(out);
    }
    
  }, [getCityData, tab]);

  return (
    <div className="w-4/6 flex justify-between items-start">
      <Tabs setTab={setTab} tab={tab}>
        {filteredCity.length > 0 && <WeatherCard weatherData={filteredCity[0]} />}
      </Tabs>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
