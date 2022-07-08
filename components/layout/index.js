import { useState, useEffect, useCallback } from 'react';
import { setNewTab, setForecast, setSelectedDate } from '../../store/actions';
import { CITIES } from '../../utils/constants';
import Calendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import { getForecastByCity } from '../../services/weather';
import 'react-calendar/dist/Calendar.css';
import Tabs from '../Tabs';

export default function Layout({ children }) {
  const { seletedDate } = useSelector((state) => state.weather);
  const [date, setDate] = useState(new Date());
  const [tab, setTab] = useState('New York');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNewTab(tab));
  }, [tab]);

  useEffect(() => {
    dispatch(setSelectedDate(date));
  }, [date]);

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col justify-start items-center bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400">
      <header className="w-full flex justify-center py-12">
        <h1 className="font-medium leading-tight text-4xl bold mt-0 mb-2 text-white">
          Weather App!
        </h1>
      </header>
      <div className="w-full px-32 flex justify-between items-start">
        <Tabs setTab={setTab} tab={tab} tabList={CITIES}>
          {children}
        </Tabs>
        <Calendar className="mt-6 rounded" onChange={setDate} value={date} />
      </div>
    </div>
  );
}
