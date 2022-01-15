import { useContext, useRef, useState } from "react";
// import AllTourContext from "../store/allTours-context";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [loadedTours, setLoadedTours] = useState(props.tours);

  const byDate = loadedTours.sort((a, b) => {
    {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a must be equel to 0
      return 0;
    }
  });

  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = () => {
    const enteredSelect = inputRef.current.value;
    props.onInput(enteredSelect);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="search">
        Search tour by country or title
        {/* <select ref={inputRef} onChange={changeHandler}>
          <option>Date</option>
          <option>Country</option>
          <option>High Price</option>
          <option>Low Price</option>
        </select> */}
      </label>
      <input type="text" id="search" ref={inputRef} onChange={changeHandler} />
    </form>
  );
};

export default SearchForm;
