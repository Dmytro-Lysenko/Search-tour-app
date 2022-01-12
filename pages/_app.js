import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { FavoriteContextProvider } from "../components/store/favorites-context";
import { AllTourContextProvider } from "../components/store/allTours-context";
import { CartContextProvider } from "../components/store/cart-context";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartContextProvider>
        <AllTourContextProvider>
          <FavoriteContextProvider>
            <Component {...pageProps} />
          </FavoriteContextProvider>
        </AllTourContextProvider>
      </CartContextProvider>
    </Layout>
  );
}

export default MyApp;
