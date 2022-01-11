import { useContext } from "react";
import CartList from "../../components/cart/CartList";
import FavoriteContext from "../../components/store/favorites-context";

const Cart = (props) => {
  const favoriteCtx = useContext(FavoriteContext);
  const favoriteTours = favoriteCtx.favoriteTours;

  return <CartList tours={favoriteTours} />;
};

export default Cart;
