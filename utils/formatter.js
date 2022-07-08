import { CITIES } from './constants';

export const cityFormatter = (url) => {
  const out = CITIES.filter((city) => city.url === url);
  const [city] = out;
  return city.name;
};
