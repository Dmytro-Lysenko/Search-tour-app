import { createContext, useState } from "react";

const AllTourContext = createContext({
  allTours: [],
  totalTours: 0,
  setTours: (tour) => {},
});

export const AllTourContextProvider = (props) => {
  const [allTours, setAllTours] = useState([]);

  const setHandler = (tour) => {
    console.log(tour);
    setAllTours(tour);
  };

  const context = {
    allTours: allTours,
    totalTours: allTours.length,
    setTours: setHandler,
  };

  return (
    <AllTourContext.Provider value={context}>
      {props.children}
    </AllTourContext.Provider>
  );
};

export default AllTourContext;
