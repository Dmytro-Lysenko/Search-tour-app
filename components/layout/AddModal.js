import React, { useEffect, useState } from "react";
import classes from "./AddModal.module.css";

function AddModal(props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (
      props.message === "You have deleted tour from cart!" ||
      props.message === "You have added tour to cart!" ||
      props.message === "You have deleted tour from favorites!" ||
      props.message === "You have added tour to favorites!"
    ) {
      setIsShown((prev) => {
        return (prev = true);
      });
      const timer = setTimeout(() => {
        setIsShown(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [props]);

  const styles = `${classes.card} ${isShown ? classes.active : classes.card}`;

  return (
    <div className={styles}>
      <h1>{props.message}</h1>
    </div>
  );
}

export default AddModal;
