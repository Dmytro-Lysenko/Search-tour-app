import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favoriteTours: [],
  totalFavTours: 0,
  addToFavTours: (tour) => {},
  deleteFromFavoritesTours: (tourId) => {},
  isFavorite: (tourId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [favoritesTours, setFavoritesTours] = useState([]);

  const addHandler = (tour) => {
    setFavoritesTours((prevTours) => {
      return [...prevTours, tour];
    });
  };

  const deleteHandler = (tourId) => {
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
