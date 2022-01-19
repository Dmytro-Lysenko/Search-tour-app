import { createContext, useState } from "react";

const AllTourContext = createContext({
  allTours: [],
  totalTours: 0,
  popularTours: [],
  adToPopularTour: (tour) => {},
  setTours: (tour) => {},
  searchTours: (name) => {},
});

export const AllTourContextProvider = (props) => {
  const [allTours, setAllTours] = useState([]);
  const [popTours, setPopTours] = useState([]);

  const setHandler = (tours) => {
    setAllTours(tours);
  };

  const addToPopularTourHandler = (tour) => {
    console.log(tour);
    setPopTours((prev) => {
      return [...prev, tour];
    });
  };

  const searchHandler = (price) => {
    // const y = allTours.sort(function (a, b) {
    //   return a.price - b.price;
    // });
    // setAllTours(y);
    // console.log("click", allTours);
  };

  const context = {
    allTours: allTours,
    totalTours: allTours.length,
    popularTours: popTours,
    adToPopularTour: addToPopularTourHandler,
    setTours: setHandler,
    searchTours: searchHandler,
  };

  return (
    <AllTourContext.Provider value={context}>
      {props.children}
    </AllTourContext.Provider>
  );
};

export default AllTourContext;
