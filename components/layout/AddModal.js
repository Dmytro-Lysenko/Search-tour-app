import React, { useEffect, useState } from "react";
import classes from "./AddModal.module.css";

function AddModal(props) {
  const [isShown, setIsShown] = useState(false);

  if (props.message === "You have deleted tour to cart!") {
  }

  useEffect(() => {
    if (
      props.message === "You have deleted tour to cart!" ||
      props.message === "You have added tour to cart!" ||
      props.message === "You have deleted tour to favorites!" ||
      props.message === "You have added tour to favorites!"
    ) {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false);
      }, 1700);
    }
  }, [props]);

  const styles = `${classes.card} ${isShown ? classes.active : classes.card}`;

  const style = `${classes.card}  ${isShown ? classes.bump : classes.card} `;

  return (
    <div className={styles}>
      <h1>{props.message}</h1>
    </div>
  );
}

export default AddModal;
