import '../styles/globals.css';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store/configStore';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default withRedux(makeStore)(MyApp);
