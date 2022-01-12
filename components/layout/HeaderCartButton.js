import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../ui/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [number, setNumber] = useState(0);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setNumber(cartCtx.totlaCartTours);
  }, [cartCtx.totlaCartTours,cartCtx.cartTours]);

  console.log(cartCtx.totlaCartTours);
  console.log(cartCtx.cartTours.length);

  // const numberOfCartItems = cartContext.tours.reduce((curNum, item) => {
  //   return curNum + item.amount;
  // }, 0);
  // const numberOfCartItems = cartCtx.totlaCartTours;

  const router = useRouter();
  const headerCartHandler = () => {
    router.push("/cart");
  };

  return (
    <li>
      <button onClick={headerCartHandler} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.cart}>Cart</span>
        <span className={classes.badge}>{cartCtx.cartTours.length}</span>
      </button>
    </li>
  );
};

export default HeaderCartButton;
