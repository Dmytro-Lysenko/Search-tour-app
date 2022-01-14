import CartTour from "./CartTour";
import CartContext from "../store/cart-context";
import { useContext, useState } from "react";
import BookTourModal from "../ui/BookTourModel";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const [bookTour, setBookTour] = useState(false);

  // const test = [
  //   { id: "2", price: 230 },
  //   { id: "3", price: 260 },
  // ];

  // const price = test.map((item) => item.price);
  // const updPrice = price.reduce((a, b) => a + b, 0);
  // console.log(price.concat(290));
  // console.log(updPrice);

  // const po = [230, 450, 44, 334, 22, 450];
  // console.log(po);
  // const y = po.filter((num) => num !== 450);

  // const s = po.indexOf(450);
  // if (s !== -1) {
  //   po.splice(s, 1);
  // }
  // console.log(po);
  // console.log(y);

  if (props.tours.length === 0) {
    return <p>Thre is no items in cart</p>;
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
      Cart CartList
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
        <div>
          <button onClick={clearCartHandler}>Clear the cart</button>
          <button onClick={bookToursHandler}>Book tours</button>
          {bookTour && <BookTourModal onClose={closeBookOrderModalHandler} />}
        </div>
      </div>
    </div>
  );
};
export default CartList;
