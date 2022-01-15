import { createContext, useState } from "react";

const AllTourContext = createContext({
  allTours: [],
  totalTours: 0,
  setTours: (tour) => {},
  searchTours: (name) => {},
});

export const AllTourContextProvider = (props) => {
  const [allTours, setAllTours] = useState([]);

  const setHandler = (tours) => {
    setAllTours(tours);
  };

  const searchHandler = (name) => {
    console.log(allTours.filter((tour) => tour.country === name));
    // setAllTours((prev) => {
    //   return (prev = allTours.filter((tour) => tour.country === name));
    // });
    // const tours = [...allTours];
    // tours.filter((tour) => {
    //   if (tour.country === name) {
    //     const filtredTours = tour;
    //     console.log(filtredTours);
    //     return filtredTours;

    //     // setAllTours(filtredTours);
    //     // console.log(allTours);
    //   } else {
    //     setAllTours([]);
    //   }
    //   setAllTours(filtredTours);
    // console.log(allTours);
    // });
  };

  const context = {
    allTours: allTours,
    totalTours: allTours.length,
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
