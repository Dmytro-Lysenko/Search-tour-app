import { useContext } from "react";
import CartList from "../../components/cart/CartList";
import FavoriteContext from "../../components/store/favorites-context";

const Cart = (props) => {
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

  return <CartList tours={favoriteTours} />;
};

export default Cart;
