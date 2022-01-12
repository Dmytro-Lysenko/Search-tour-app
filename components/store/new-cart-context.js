import { createContext } from "react";

const NewCartContext = createContext({
  tours: [],
  totalAmount: 0,
  addTour: (tour) => {},
  removeTour: (id) => {},
});

export default NewCartContext;
