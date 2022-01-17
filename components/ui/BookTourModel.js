import { useContext, Fragment, useState } from "react";

import CartContext from "../store/cart-context";
import classes from "./BookTourModal.module.css";
import SuccessModal from "./SuccessModal";

const BookTourModal = (props) => {
  const cartCtx = useContext(CartContext);
  const [successOrder, setSuccessOrder] = useState(false);
  const [item, setItem] = useState({
    name: "Alinama",
    age: 127,
  });

  // async function buyToursHandler() {
  //   setSuccessOrder(true);

  //   const newOrder = cartCtx.cartTours.map((tour) => tour);

  //   const test = {
  //     name: "Dima",
  //     age: 17,
  //   };

  //   const response = await fetch("/api/new-booked-tour", {
  //     method: "POST",
  //     body: JSON.stringify(test),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();

  //   console.log(data);
  // }

  async function buyToursHandler() {
    setSuccessOrder(true);
    const newOrder = cartCtx.cartTours;

    const r = [
      {
        name: "Dima",
        age: 17,
      },
      {
        name: "ritaa",
        age: 27,
      },
    ];
    r.map((item) => {
      setItem((prevItem) => {
        return (prevItem = item);
      });
    });

    // const y = {
    //   ...r,
    //   price: 400,
    // };

    // const l = r.map((item) => item);
    // console.log(y);

    const response = await fetch("/api/new-booked-tour", {
      method: "POST",
      body: JSON.stringify([newOrder]),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    // const response = await fetch("/api/new-booked-tour", {
    //   method: "POST",
    //   body: JSON.stringify(test),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();

    // console.log(data);
  }

  // async function addTourHandler(enteredTour) {
  //   const response = await fetch("/api/new-tour", {
  //     method: "POST",
  //     body: JSON.stringify(enteredTour),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();

  //   console.log(data);
  //   router.push("/");
  // }

  if (successOrder) {
    return <SuccessModal />;
  }

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <h1>Your booked tours</h1>
        {cartCtx.cartTours.map((tour) => (
          <div className={classes.tour} key={tour.id}>
            <div>
              <img src={tour.photo} alt={tour.title} />
            </div>
            <div className={classes.content}>
              <h2>
                Tour: <span>{tour.title}</span>
              </h2>
              <h2>
                Tourist: <span>{tour.tourist}</span>
              </h2>
              <h2>
                Date: <span>{tour.date}</span>
              </h2>
              <h2>
                Price: <span>{tour.priceForAllTourist} $</span>
              </h2>
            </div>
          </div>
        ))}

        <h1>All booked tours price: {cartCtx.totalCartPrice} $</h1>
        <div className={classes.actions}>
          <button onClick={buyToursHandler}>Buy tours</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </Fragment>
  );
};

export default BookTourModal;