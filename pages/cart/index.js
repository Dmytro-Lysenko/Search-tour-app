import { useContext } from "react";
import CartList from "../../components/cart/CartList";

import CartContext from "../../components/store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const toursInCart = cartCtx.cartTours;



  return <CartList tours={toursInCart} />;
};

export default Cart;
