import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../ui/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [isHighLighted, setIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfTours = cartCtx.cartTours.length;

  useEffect(() => {
    if (cartCtx.cartTours.length === 0) {
      return;
    }
    setIsHighLighted(true);

    const timer = setTimeout(() => {
      setIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.cartTours.length]);

  // const numberOfCartItems = cartContext.tours.reduce((curNum, item) => {
  //   return curNum + item.amount;
  // }, 0);
  // const numberOfCartItems = cartCtx.totlaCartTours;

  const router = useRouter();
  const headerCartHandler = () => {
    router.push("/cart");
  };

  const btnClasses = `${classes.button} ${isHighLighted ? classes.bump : " "}`;

  return (
    <li>
      <button onClick={headerCartHandler} className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.cart}>Cart</span>
        <span className={classes.badge}>{numberOfTours}</span>
      </button>
    </li>
  );
};

export default HeaderCartButton;
