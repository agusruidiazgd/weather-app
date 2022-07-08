import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import WeatherCard from '../WeatherCard';
import Modal from '../Modal';

export default function Main() {
  const { selectedCity, seletedTab, forecast, seletedDate } = useSelector(
    (state) => state.weather
  );
  const [dayForecast, setDayForecast] = useState([]);
  const [error, setError] = useState(false);
  const showForecast = seletedTab === forecast?.city?.name;

  const filterForecastMainWeather = () => {
    let out = [];
    out =
      forecast &&
      seletedDate &&
      forecast.list.filter(
        (elem) =>
          new Date(Number(elem.dt) * 1000).getDate() ===
          new Date(seletedDate).getDate()
      );
    if (out.length === 0) setError(true);
    else setError(false);
    setDayForecast(out);
  };

  useEffect(() => {
    if (showForecast) filterForecastMainWeather();
  }, [seletedDate, selectedCity, seletedTab, showForecast]);

  const handleCloseModal = () => setError(false);

  return (
    <div className="flex flex-col">
      {error && <Modal active={!error} onClose={handleCloseModal} />}
      <div className="flex justify-center items-center mb-6">
        {selectedCity ? (
          <WeatherCard weatherData={selectedCity} />
        ) : (
          <p>Please select a city</p>
        )}
      </div>
      {dayForecast && !error && (
        <h5>Weather Forecast {new Date(seletedDate).toDateString()} </h5>
      )}
      <div className="flex flex-wrap justify-start mt-6">
        {dayForecast &&
          dayForecast.map((time) => (
            <div key={time.dt} className="m-3">
              <WeatherCard mini weatherData={time} />
            </div>
          ))}
      </div>
    </div>
  );
}
