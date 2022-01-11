import { createContext } from "react";

const CartContext = createContext({
  tours: [],
  totalAmount: 0,
  addItem: (tour) => {},
  removeItem: (id) => {},
});

export default CartContext;
