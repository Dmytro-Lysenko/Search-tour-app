import CartTour from "./CartTour";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const CartList = (props) => {
  console.log(props.tours);
  const cartCtx = useContext(CartContext);

  const test = [
    { id: "2", price: 230 },
    { id: "3", price: 260 },
  ];
  const price = test.map((item) => item.price);
  const updPrice = price.reduce((a, b) => a + b, 0);
  console.log(price);
  console.log(updPrice);

  if (props.tours.length === 0) {
    return <p>Thre is no items in cart</p>;
  }
  const clearCartHandler = () => {
    cartCtx.clearCart();
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
      <div>Total: {cartCtx.totalCartPrice}</div>
      <button onClick={clearCartHandler}>Clear the cart</button>
    </div>
  );
};
export default CartList;
