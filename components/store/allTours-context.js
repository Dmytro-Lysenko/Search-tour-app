import { createContext, useState } from "react";

const AllTourContext = createContext({
  allTours: [],
  totalTours: 0,
  popularTours: [],
  adToPopularTour: (tour) => {},
  setTours: (tour) => {},
});

export const AllTourContextProvider = (props) => {
  const [allTours, setAllTours] = useState([]);
  const [popTours, setPopTours] = useState([]);

  const setHandler = (tours) => {
    setAllTours(tours);
  };

  const addToPopularTourHandler = (tour) => {
    if (popTours.map((tours) => tours.id.includes(tour.id))) {
    }
    setPopTours((prev) => {
      return [...prev, tour];
    });
  };

  const context = {
    allTours: allTours,
    totalTours: allTours.length,
    popularTours: popTours,
    adToPopularTour: addToPopularTourHandler,
    setTours: setHandler,
  };

  return (
    <AllTourContext.Provider value={context}>
      {props.children}
    </AllTourContext.Provider>
  );
};

export default AllTourContext;
