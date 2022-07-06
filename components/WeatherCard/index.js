import { getWeatherIcon } from '../../services/weather'
import Image from 'next/image';

export default function WeatherCard({ weatherData }) {
  const {name,weather: [weather], main: temperatureInfo, wind } = weatherData;
  //TODO: do this component agnostic
	
  return (
    <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 text-sm">{name || ''}</p>
        <Image
          src={getWeatherIcon(weather?.icon)}
          alt={weather.description}
          width="150px"
          height="150px"
        />
        <p className="text-center text-gray-500 mt-2 text-sm">
          {weather?.main}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-7xl font-bold text-left text-gray-900">
          {`${temperatureInfo?.temp.toFixed()}°`}
        </p>
        <p className="pt-6 text-gray-500 text-left text-sm">{`Humidity ${temperatureInfo.humidity} %`}</p>
        <p className="pt-6 text-gray-500 text-left text-sm">{`Wind ${wind.speed} Km/h`}</p>
      </div>
    </div>
  );
}
