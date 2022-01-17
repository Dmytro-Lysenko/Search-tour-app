import { createContext, useState } from "react";

const CartContext = createContext({
  cartTours: [],
  totlaCartTours: 0,
  cartPrices: [],
  message: "",
  increaseTourist: (tourId) => {},
  decreaseTourist: (tourId) => {},
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
  const [message, setMessage] = useState("");

  const addHandler = (tour) => {
    setMessage("You have added tour to cart!");
    setToursInCart((prevTours) => {
      return [...prevTours, tour];
    });
  };

  const deleteHandler = (tourId) => {
    setMessage("You have deleted tour from cart!");
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
  };

  const addToCartPrices = (price) => {
    setCartPrices((prevPrice) => {
      return [...prevPrice, price];
    });
  };

  const delFromCartPrices = (price) => {
    const indexPrice = cartPrices.indexOf(price);
    if (indexPrice !== -1) {
      setTotalPrices(cartPrices.splice(indexPrice, 1));
    }
  };

  const increaseTouristHandler = (tourId) => {
    // const filteredTour = toursInCart.filter(tour => tour.id === tourId)
    toursInCart.map((tour) => {
      if (tour.id === tourId) {
        tour.tourist += 1;
        tour.priceForAllTourist = +tour.price + tour.priceForAllTourist;
        return tour;
      }
    });
    // console.log(filteredTour);
  };
  const decreaseTouristHandler = (tourId) => {
    toursInCart.map((tour) => {
      if (tour.id === tourId) {
        tour.tourist -= 1;
        tour.priceForAllTourist = tour.priceForAllTourist - +tour.price;
        return tour;
      }
    });
  };

  const context = {
    cartTours: toursInCart,
    totlaCartTours: toursInCart.length,
    totalCartPrice: totalPrice,
    cartPrices: cartPrices,
    message: message,
    increaseTourist: increaseTouristHandler,
    decreaseTourist: decreaseTouristHandler,
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
