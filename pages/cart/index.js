import Head from "next/head";
import { Fragment, useContext } from "react";
import CartList from "../../components/cart/CartList";

import CartContext from "../../components/store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const toursInCart = cartCtx.cartTours;

  return (
    <Fragment>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Tours that user added in cart" />
      </Head>
      <CartList tours={toursInCart} />
    </Fragment>
  );
};

export default Cart;
