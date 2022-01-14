import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./BookTourModal.module.css";

const BookTourModal = (props) => {
  const cartCtx = useContext(CartContext);
  
  const closeBookOrderModalHandler = ()=> {
    props.onClose()
  }

  return (
    <div className={classes.backdrop} onClick={closeBookOrderModalHandler}>
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
                Price: <span>{tour.priceForAllTourist}</span>
              </h2>
              <div className={classes.actions}>
                <button>Book tours</button>
                <button onClick={closeBookOrderModalHandler}>Close</button>
              </div>
            </div>
          </div>
        ))}

        <h1>All booked tours price:{cartCtx.totalCartPrice}</h1>
      </div>
    </div>
  );
};

export default BookTourModal;
