import React, { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./SortedTours.module.css";

function SortedTours(props) {
  const [isActiveDate, setIsActiveDate] = useState();
  const [isActivePrice, setIsActivePrice] = useState();
  const [isActiveCountry, setIsActiveCountry] = useState();

  const stylesDate = `${classes.button} ${
    isActiveDate ? classes.active : classes.button
  }`;

  const stylesPrice = `${classes.button} ${
    isActivePrice ? classes.active : classes.button
  }`;
  const stylesCountry = `${classes.button} ${
    isActiveCountry ? classes.active : classes.button
  }`;

  const sortHandler = (value) => {
    if (value === "date") {
      setIsActivePrice(
        isActivePrice ? setIsActivePrice(!isActivePrice) : isActivePrice
      );
      setIsActiveCountry(
        isActiveCountry ? setIsActivePrice(!isActiveCountry) : isActiveCountry
      );
      setIsActiveDate(!isActiveDate);
    }
    if (value === "price") {
      setIsActiveDate(
        isActiveDate ? setIsActivePrice(!isActiveDate) : isActiveDate
      );
      setIsActiveCountry(
        isActiveCountry ? setIsActivePrice(!isActiveCountry) : isActiveCountry
      );
      setIsActivePrice(!isActivePrice);
    }
    if (value === "country") {
      setIsActiveDate(
        isActiveDate ? setIsActivePrice(!isActiveDate) : isActiveDate
      );
      setIsActivePrice(
        isActivePrice ? setIsActivePrice(!isActivePrice) : isActivePrice
      );
      setIsActiveCountry(!isActiveCountry);
    }
    props.onSort(value);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <button className={stylesDate} onClick={() => sortHandler("date")}>
          By date
        </button>
        <button className={stylesPrice} onClick={() => sortHandler("price")}>
          By price
        </button>
        <button
          className={stylesCountry}
          onClick={() => sortHandler("country")}
        >
          By country
        </button>
      </div>
    </Fragment>
  );
}

export default SortedTours;
