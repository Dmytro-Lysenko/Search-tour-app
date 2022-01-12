import { createContext, useState } from "react";

const CartContext = createContext({
  cartTours: [],
  totlaCartTours: 0,
  addTourToCart: (tour) => {},
  deleteTourFromCart: (tourId) => {},
  isInCart: (tourId) => {},
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

  const context = {
    cartTours: toursInCart,
    totlaCartTours: toursInCart.length,
    addTourToCart: addHandler,
    deleteTourFromCart: deleteHandler,
    isInCart: isInCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
