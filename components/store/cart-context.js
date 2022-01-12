import { createContext, useState } from "react";

const CartContext = createContext({
  cartTours: [],
  totlaCartTours: 0,
  totalCartPrice: 0,
  addTourToCart: (tour) => {},
  deleteTourFromCart: (tourId) => {},
  isInCart: (tourId) => {},
  clearCart: () => {},
});

export const CartContextProvider = (props) => {
  const [toursInCart, setToursInCart] = useState([]);

  const addHandler = (tour) => {
    setToursInCart((prevTours) => {
      return [...prevTours, tour];
    });
  };

  const deleteHandler = (tourId) => {
    setToursInCart((prevTours) => {
      return prevTours.filter((tour) => tour.id !== tourId);
    });
  };

  const isInCartHandler = (tourId) => {
    return toursInCart.some((tour) => tour.id === tourId);
  };

  const clearCartHandler = () => {
    setToursInCart([]);
  };

  const price = toursInCart.map((tour) => +tour.price);
  const totalPrice = price.reduce((a, b) => a + b, 0);

  const context = {
    cartTours: toursInCart,
    totlaCartTours: toursInCart.length,
    totalCartPrice: totalPrice,
    addTourToCart: addHandler,
    deleteTourFromCart: deleteHandler,
    isInCart: isInCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
