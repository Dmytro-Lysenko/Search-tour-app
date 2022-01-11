import { useRef, useState } from "react";
import classes from "./CartList.module.css";

const CartTour = (props) => {
  const amountInput = useRef();
  const [amountValue, setAmountValue] = useState(1);

  const increaseHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    if (enteredInputAmount < 10) {
      setAmountValue((prevAmount) => {
        return (prevAmount = amountValue++);
      });
    }
  };

  const decreaseHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    if (1 < enteredInputAmount) {
      setAmountValue((prevAmount) => {
        return amountValue--;
      });
    }
  };

  const changeHandler = () => {
    const enteredInputAmount = amountInput.current.value;
    setAmountValue(enteredInputAmount);
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
        <h1>Total: </h1>
      </div>
    </li>
  );
};
export default CartTour;
