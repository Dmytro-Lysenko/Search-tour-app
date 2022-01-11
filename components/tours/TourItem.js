import { useRouter } from "next/router";
import { useState, useContext } from "react";
import FavoriteContext from "../store/favorites-context";

import Card from "../ui/Card";
import classes from "./TourItem.module.css";

function TourItem(props) {
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();
  const favoritesCtx = useContext(FavoriteContext);
  const isFavorite = favoritesCtx.isFavorite(props.id);

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  const addToCartHandler = () => {
   
    // favoritesCtx.addToFavTours();
    if (isFavorite) {
      favoritesCtx.deleteFromFavoritesTours(props.id);
    } else {
      favoritesCtx.addToFavTours(props);
    }
    console.log(favoritesCtx.favoriteTours);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.photo} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h2>{props.country}</h2>
          <h1>{props.price}$</h1>
          <h1>{props.date}</h1>
          <p>
            {readMore
              ? props.description
              : `${props.description.substring(0, 128)}...`}
            <button
              className={classes.buttonRead}
              onClick={toogleReadMoreHandler}
            >
              {!readMore ? " read more" : " hide"}
            </button>
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(props)}>
            {!isFavorite ? "Add to favorite" : "Del from favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TourItem;
