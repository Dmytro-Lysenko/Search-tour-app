import { useRouter } from "next/router";
import React from "react";

import classes from "./ErrorModal.module.css";

const SuccessModal = (props) => {
  const router = useRouter();

  const closeHandler = () => {
    router.push("/booked-tours");
  };

  return (
    <React.Fragment>
      <div className={classes["backdrop"]} onClick={props.onClose} />
      <div className={classes["error-modal"]}>
        <h2>Thank You! <br/> You have successfully Booked tours!</h2>
        <p>{props.children}</p>
        <div className={classes["error-modal__actions"]}>
          <button type="button" onClick={closeHandler}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessModal;
