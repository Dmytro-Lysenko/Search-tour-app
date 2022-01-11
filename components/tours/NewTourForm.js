import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewTourForm.module.css";

function NewTourForm(props) {
  const titleInputRef = useRef();
  const countryInputRef = useRef();
  const dateInputRef = useRef();
  const photoInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const tourData = {
      title: enteredTitle,
      country: enteredCountry,
      date: enteredDate,
      photo: enteredPhoto,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddTour(tourData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Tour Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="country">Tour Country</label>
          <input type="text" required id="country" ref={countryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Tour date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="photo">Tour Photo</label>
          <input type="url" required id="photo" ref={photoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="ptice" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Tour</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTourForm;
