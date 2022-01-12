import { useContext } from "react";
import CartList from "../../components/cart/CartList";
import FavoriteContext from "../../components/store/favorites-context";
import CartContext from "../../components/store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const toursInCart = cartCtx.cartTours;
  console.log(cartCtx.cartTours);
  // const obj = {
  //   current: {
  //     errors: {},
  //     items: {
  //       Foo: { data: "foo data" },
  //     },
  //   },
  // };

  // const [key, val] = Object.entries(obj.current.items)[0];
  // console.log(key);
  // console.log(typeof(val));

  const favoriteCtx = useContext(FavoriteContext);
  const favoriteTours = favoriteCtx.favoriteTours;

  return <CartList tours={toursInCart} />;
};

export default Cart;
