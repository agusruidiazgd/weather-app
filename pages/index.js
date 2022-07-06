import 'react-calendar/dist/Calendar.css';
import Layout from '../components/layout'
import Main from '../components/main';

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const berlin = await getWeatherByCity('Berlin');
//   const london = await getWeatherByCity('London');
//   const paris = await getWeatherByCity('Paris');
//   const newYork = await getWeatherByCity('New York');
//   const tokyo = await getWeatherByCity('Tokyo');
//   const buenosAires = await getWeatherByCity('Buenos Aires');
//   const milan = await getWeatherByCity('Milan');
  
//   return {
//     props: {
//       weatherListProp: [
//         berlin,
//         london,
//         paris,
//         newYork,
//         tokyo,
//         buenosAires,
//         milan,
//       ],
//     },
//   };
// }
