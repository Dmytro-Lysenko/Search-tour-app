import { createContext, useState } from "react";

const CartContext = createContext({
  cartTours: [],
  totlaCartTours: 0,
  cartPrices: [],
  addToPrices: (price) => {},
  delFromPrices: (price) => {},
  totalCartPrice: 0,
  addToTotalPrices: () => {},
  addTourToCart: (tour) => {},
  deleteTourFromCart: (tourId) => {},
  isInCart: (tourId) => {},
  clearCart: () => {},
});

export const CartContextProvider = (props) => {
  const [toursInCart, setToursInCart] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  const [cartPrices, setCartPrices] = useState([]);

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
  const totalPrice = cartPrices.reduce((a, b) => a + b, 0);

  const addToTotalPricesHandler = (priceTour) => {
    setTotalPrices((prev) => {
      return [...prev, priceTour];
    });
    console.log(totalPrices);
  };

  const addToCartPrices = (price) => {
    setCartPrices((prevPrice) => {
      return [...prevPrice, price];
    });
    console.log(price, cartPrices);
  };

  const delFromCartPrices = (price) => {
    const indexPrice = cartPrices.indexOf(price);
    if (indexPrice !== -1) {
      setTotalPrices(cartPrices.splice(indexPrice, 1));
    }

    console.log("context cartprices", cartPrices);
  };

  const context = {
    cartTours: toursInCart,
    totlaCartTours: toursInCart.length,
    totalCartPrice: totalPrice,
    cartPrices: cartPrices,
    addToPrices: addToCartPrices,
    delFromPrices: delFromCartPrices,
    addToTotalPrices: addToTotalPricesHandler,
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
