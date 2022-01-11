import { useRouter } from "next/router";
import { useContext } from "react";
import CartIcon from "../ui/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.tours.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

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
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </li>
  );
};

export default HeaderCartButton;
