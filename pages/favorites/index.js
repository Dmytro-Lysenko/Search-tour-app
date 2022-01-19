import Head from "next/head";
import { Fragment, useContext } from "react";
import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/side-bar/SideBar";
import FavoriteContext from "../../components/store/favorites-context";
import TourList from "../../components/tours/TourList";
import CartIcon from "../../components/ui/CartIcon";

const Favorites = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const favoriteTours = favoriteCtx.favoriteTours;

  const noTours = (
    <h1 style={{ textAlign: "center", color: "#77002e" }}>
      There are no favorite tours
    </h1>
  );

  return (
    <Fragment>
      <Head>
        <title>Favorite tours</title>
        <meta name="description" content="Favorite tours choosen by user!" />
      </Head>
      {favoriteCtx.favoriteTours.length === 0 ? (
        noTours
      ) : (
        <TourList tours={favoriteTours} />
      )}
    </Fragment>
  );
};
export default Favorites;
