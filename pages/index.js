import { useSelector } from 'react-redux';

export default function Home() {
  const counter = useSelector(state => state.weather);
  console.log(counter);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
