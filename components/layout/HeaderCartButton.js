import { useRouter } from "next/router";
import CartIcon from "../ui/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const router = useRouter();
  const headerCartHandler = () => {
    console.log("click");
    router.push("/cart");
  };

  return (
    <li >
      <button onClick={headerCartHandler} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.cart}>Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </li>
  );
};

export default HeaderCartButton;
