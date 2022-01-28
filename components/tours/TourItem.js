import { useRouter } from "next/router";
import { useState, useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import CartContext from "../store/cart-context";
import AllTourContext from "../store/allTours-context";
import Card from "../ui/Card";
import classes from "./TourItem.module.css";
import AddModal from "../layout/AddModal";
import LoadingIndicator from "../ui/LoadingIndicator";

function TourItem(props) {
  const [readMore, setReadMore] = useState(false);
  const [mes, setMes] = useState();

  const router = useRouter();
  const allCtx = useContext(AllTourContext);
  const favoritesCtx = useContext(FavoriteContext);
  const cartCtx = useContext(CartContext);
  const isInCart = cartCtx.isInCart(props.id);
  const isFavorite = favoritesCtx.isFavorite(props.id);
  const [isLoading, setIsLoading] = useState(false);

  function showDetailsHandler(tour) {
    setIsLoading(true);
    router.push("/" + tour.id);
    allCtx.adToPopularTour(tour);
  }

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  const addToFavorite = () => {
    if (isFavorite) {
      favoritesCtx.deleteFromFavoritesTours(props.id);
      setMes("You have deleted tour from favorites!");
    } else {
      setMes("You have added tour to favorites!");
      const updTour = {
        ...props,
        isFav: true,
      };
      favoritesCtx.addToFavTours(updTour);
    }
  };

  const addToCartHandler = () => {
    if (isInCart) {
      cartCtx.deleteTourFromCart(props.id);
      cartCtx.delFromPrices(+props.price);
      setMes("You have deleted tour from cart!");
    } else {
      const updatedTour = {
        ...props,
        tourist: 1,
        priceForAllTourist: +props.price,
      };
      cartCtx.addTourToCart(updatedTour);
      cartCtx.addToPrices(+props.price);
      setMes("You have added tour to cart!");
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.photo} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>Title: {props.title}</h3>
          <h2>Country: {props.country}</h2>
          <h1>Price: {props.price}$</h1>
          <h1>Date: {props.date}</h1>
          <p>
            {readMore
              ? props.description
              : `${props.description.substring(0, 128)}...`}
            <button
              className={classes["read-more"]}
              onClick={toogleReadMoreHandler}
            >
              {!readMore ? " read more" : " hide"}
            </button>
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => showDetailsHandler(props)}>
            Show Details
          </button>
        </div>
        <div className={classes.actions}>
          <button onClick={() => addToFavorite(props)}>
            {!isFavorite ? "Add to favorite" : "Del from favorites"}
          </button>
          <button onClick={() => addToCartHandler(props)}>
            {!isInCart ? "Add to cart" : "Delete from cart"}
          </button>
        </div>
        {isLoading && <LoadingIndicator />}
        <AddModal message={mes} />
      </Card>
    </li>
  );
}

export default TourItem;
