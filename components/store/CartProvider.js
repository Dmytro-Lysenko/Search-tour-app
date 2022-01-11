import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  tours: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action === "ADD") {
    const updatedTours = state.tours.concat(action.tour);
    const updatedTotalAmount =
      state.totalAmount + action.tour.price * action.tour.amount;

    return {
      tours: updatedTours,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (tour) => {
    dispatchCartAction({
      type: "ADD",
      tour: tour,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.tours,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
