import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { FavoriteContextProvider } from "../components/store/favorites-context";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <FavoriteContextProvider>
        <Component {...pageProps} />
      </FavoriteContextProvider>
    </Layout>
  );
}

export default MyApp;
