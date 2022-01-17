import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favoriteTours: [],
  totalFavTours: 0,
  message: "",
  addToFavTours: (tour) => {},
  deleteFromFavoritesTours: (tourId) => {},
  isFavorite: (tourId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [favoritesTours, setFavoritesTours] = useState([]);
  const [message, setMessage] = useState("");

  const addHandler = (tour) => {
    setMessage("You have added tour to favorites!");
    setFavoritesTours((prevTours) => {
      return [...prevTours, tour];
    });
  };

  const deleteHandler = (tourId) => {
    setMessage("You have deleted tour to favorites!");
    setFavoritesTours((prevTours) => {
      return prevTours.filter((tour) => tour.id !== tourId);
    });
  };

  const isFavoriteHandler = (tourId) => {
    return favoritesTours.some((tour) => tour.id === tourId);
  };

  const context = {
    favoriteTours: favoritesTours,
    totalFavTours: favoritesTours.length,
    message: message,
    addToFavTours: addHandler,
    deleteFromFavoritesTours: deleteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
