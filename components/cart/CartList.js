import CartTour from "./CartTour";
import FavoriteContext from "../store/favorites-context";
import { useContext } from "react";

const CartList = (props) => {
  console.log(props.tours);
  //   const favoriteCtx = useContext(FavoriteContext);
  //   const favoriteTours = favoriteCtx.favoriteTours;
  //   console.log(favoriteTours);
  if (props.tours.length === 0) {
    return <p>Thre is no items in cart</p>;
  }
  return (
    <div>
      Cart CartList
      {props.tours.map((tour) => (
        <CartTour
          key={tour.id}
          id={tour.id}
          title={tour.title}
          date={tour.date}
          price={tour.price}
          photo={tour.photo}
        />
      ))}
    </div>
  );
};
export default CartList;
