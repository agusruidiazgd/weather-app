import { getWeatherIcon } from '../../services/weather'
import Image from 'next/image';

export default function WeatherCard({ mini, weatherData }) {
  const {
    name,
    weather: [weather],
    main: temperatureInfo,
    wind,
    dt
  } = weatherData;

  return (
    <div
      className={`${
        mini ? 'flex flex-col p-3' : 'space-x-12 p-2 h-48 w-1/2'
      } bg-white  bg-opacity-40 rounded-3xl flex  items-center shadow-md`}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-gray-500 text-sm">{name || ''}</p>
        <p>{`${new Date(Number(dt) * 1000).getHours()}hs`}</p>
        <Image
          src={getWeatherIcon(weather?.icon)}
          alt={weather.description}
          width={`${mini ? 100 : 100}px`}
          height={`${mini ? 100 : 100}px`}
        />
        <p className="text-center text-gray-500 mt-2 text-sm">
          {weather?.main}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p
          className={`${
            mini ? 'text-3xl' : 'text-7xl'
          } font-bold text-left text-gray-900`}
        >
          {`${temperatureInfo?.temp.toFixed()}°`}
        </p>
        <p
          className={`${mini ? 'pt-2' : 'pt-6'} text-gray-500 text-sm`}
        >{`Humidity ${temperatureInfo.humidity} %`}</p>
        <p
          className={`${mini ? 'pt-2' : 'pt-6'} text-gray-500 text-sm`}
        >{`Wind ${wind.speed} Km/h`}</p>
      </div>
    </div>
  );
}
