import '../styles/globals.css';
import { wrapper } from '../store/configStore';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
