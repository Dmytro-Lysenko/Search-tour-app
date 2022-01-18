import React from "react";

import classes from "./SortedTours.module.css";

function SortedTours(props) {
  const sortHandler = (value, event) => {
    props.onSort(value);
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={() => sortHandler("date")}>
        By date
      </button>
      <button className={classes.button} onClick={() => sortHandler("price")}>
        By price
      </button>
      <button className={classes.button} onClick={() => sortHandler("country")}>
        By country
      </button>
    </div>
  );
}

export default SortedTours;
