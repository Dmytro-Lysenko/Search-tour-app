import { useRef, useState } from "react";
import classes from "./CartList.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const CartTour = (props) => {
  const amountInput = useRef();
  const cartCtx = useContext(CartContext);
  const [amountValue, setAmountValue] = useState(1);
  const [total, setTotal] = useState(+props.price);

  const deleteFromCartHandler = () => {
    cartCtx.deleteTourFromCart(props.id)
  };

  const increaseHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    if (enteredInputAmount < 10) {
      setAmountValue((prevAmount) => {
        return amountValue + 1;
      });
      setTotal((prevTotal) => {
        return (prevTotal = (amountValue + 1) * +props.price);
      });
      console.log(total);
    }
  };

  const decreaseHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    if (1 < enteredInputAmount) {
      setAmountValue((prevAmount) => {
        return amountValue--;
      });
      setTotal((prevTotal) => {
        return (prevTotal = (amountValue + 1) * +props.price);
      });
    }
  };

  const changeHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    setAmountValue(enteredInputAmount);
    setTotal(amountValue * props.price);
  };

  return (
    <li className={classes.tour}>
      <div className={classes.photo}>
        <img src={props.photo} />
      </div>
      <div className={classes.content}>
        <h1>Title: {props.title}</h1>
        <h1>Price: {props.price} $</h1>
        <h1>Date: {props.date}</h1>
        <h1 className={classes.input}>
          Tourist:<span onClick={decreaseHandler}>-</span>
          <input
            id="tourist"
            type="number"
            // defaultValue="1"
            min="1"
            max="10"
            step="1"
            ref={amountInput}
            value={amountValue}
            onChange={changeHandler}
          />
          <span onClick={increaseHandler}>+</span>
        </h1>
        <h1>Total: {total}</h1>
        <button onClick={() => deleteFromCartHandler(props.id)}>
          Delete from cart
        </button>
      </div>
    </li>
  );
};
export default CartTour;
