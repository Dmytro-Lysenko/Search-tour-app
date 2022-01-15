import { useContext, useRef, useState } from "react";
// import AllTourContext from "../store/allTours-context";

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

    // const byDate = loadedTours.sort((a, b) => {
    //   {
    //     if (a.date > b.date) {
    //       return 1;
    //     }
    //     if (a.date < b.date) {
    //       return -1;
    //     }
    //     // a must be equel to 0
    //     return 0;
    //   }
    // });

    // const byCountry = loadedTours.sort((a, b) => {
    //   {
    //     if (a.country > b.country) {
    //       return 1;
    //     }
    //     if (a.country < b.country) {
    //       return -1;
    //     }
    //     // a must be equel to 0
    //     return 0;
    //   }
    // });

    // setLoadedTours((prev) => {
    //   return (prev = byCountry);
    // });
    props.onInput(enteredSelect);

    // const byLowPrice = loadedTours.sort((a, b) => {
    //   {
    //     if (a.price > b.price) {
    //       return 1;
    //     }
    //     if (a.price < b.price) {
    //       return -1;
    //     }
    //     // a must be equel to 0
    //     return 0;
    //   }
    // });

    // const byHighPrice = loadedTours.sort((a, b) => {
    //   {
    //     if (a.price > b.price) {
    //       return -1;
    //     }
    //     if (a.price < b.price) {
    //       return 1;
    //     }
    //     // a must be equel to 0
    //     return 0;
    //   }
    // });

    // // setLoadedTours((prev) => {
    // //   return (prev = byCountry);
    // // });

    // if (enteredSelect === "Date") {
    //   console.log("test");
    //   setLoadedTours((prev) => {
    //     return (prev = byDate);
    //   });
    // } else if (enteredSelect === "Country") {
    //   setLoadedTours((prev) => {
    //     return (prev = byCountry);
    //   });
    // } else if (enteredSelect === "High Price") {
    //   setLoadedTours((prev) => {
    //     return (prev = byHighPrice);
    //   });
    // } else if (enteredSelect === "Low Price") {
    //   setLoadedTours((prev) => {
    //     return (prev = byLowPrice);
    //   });
    // }
  };

  return (
    <form onSubmit={submitHandler}>
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
      <button>Go</button>
    </form>
  );
};

export default SearchForm;
