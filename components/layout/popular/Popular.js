import React, { useState } from "react";
import classes from "./Popular.module.css";
import * as FaIcons from "react-icons/fa";
import AllTourContext from "../../store/allTours-context";
import { useContext } from "react/cjs/react.development";

function Popular() {
  const [isShown, setIshown] = useState(false);
  const allCtx = useContext(AllTourContext);

  const styles = `${classes.container} ${
    isShown ? classes.active : classes.container
  }`;

  const toggleHandler = () => {
    setIshown(!isShown);
    console.log(allCtx.popularTours);
  };

  if (allCtx.popularTours.length === 0) {
    return <h1>There are no popular tours</h1>;
  }

  const leng = allCtx.popularTours.length - 1;
  console.log(allCtx.popularTours[0]);

  return (
    <div className={styles} onClick={toggleHandler}>
      <h1 className={classes.title}>Most Popular Tours</h1>
      <button className={classes.button}>
        <FaIcons.FaLayerGroup />
      </button>
      <div className={classes.content}>
        <h1>{allCtx.popularTours[leng].title}</h1>
        <div className={classes.photo}>
          <img
            src={allCtx.popularTours[leng].photo}
            alt={allCtx.popularTours[leng].title}
          />
        </div>
      </div>
      <div className={classes.content}>
        <h1>{leng > 1 && allCtx.popularTours[leng - 1].title}</h1>
        <div className={classes.photo}>
          <img
            src={leng > 1 && allCtx.popularTours[leng - 1].photo}
            alt={leng > 1 && allCtx.popularTours[leng - 1].title}
          />
        </div>
      </div>
    </div>
  );
}

export default Popular;
