import CartTour from "./CartTour";
import CartContext from "../store/cart-context";
import { useContext, useState } from "react";
import BookTourModal from "../ui/BookTourModel";
import classes from "./CartList.module.css";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const [bookTour, setBookTour] = useState(false);

  if (props.tours.length === 0) {
    return (
      <h1 style={{ textAlign: "center", color: "#77002e" }}>
        Thre is no items in cart
      </h1>
    );
  }
  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  const bookToursHandler = () => {
    setBookTour(true);
  };

  const closeBookOrderModalHandler = () => {
    setBookTour(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "rgb(119, 0, 46)" }}>
        Cart Tours List
      </h1>
      {props.tours.map((tour) => (
        <CartTour
          key={tour.id}
          id={tour.id}
          title={tour.title}
          date={tour.date}
          price={tour.price}
          photo={tour.photo}
        />
      ))}
      <div
        style={{
          maxWidth: "35rem",
          margin: "0 auto",
          textAlign: "right",
        }}
      >
        <h1>Total: {cartCtx.totalCartPrice}$</h1>
        <div className={classes.actions}>
          <button className={classes.actions} onClick={clearCartHandler}>
            Clear the cart
          </button>
          <button className={classes.actions} onClick={bookToursHandler}>
            Book tours
          </button>
          {bookTour && <BookTourModal onClose={closeBookOrderModalHandler} />}
        </div>
      </div>
    </div>
  );
};
export default CartList;
