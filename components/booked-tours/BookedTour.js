import classes from "./BookedTour.module.css";

const BookedTour = (props) => {
  console.log("classlist id", props.id);
  const priceOfTours = props.tours.map((tour) => tour.priceForAllTourist);
  const totalOrderPrice = priceOfTours.reduce((a, b) => a + b, 0);
  return (
    <div className={classes.order}>
      <h1 className={classes.title}>Booked Order # {props.id}</h1>
      {props.tours.map((tour) => (
        <div className={classes.container} key={tour.id}>
          <div className={classes.content}>
            <h1>Title: {tour.title}</h1>
            <h1>Price: {tour.price}$</h1>
            <h1>Date: {tour.date}</h1>
            <h1>Tourist: {tour.tourist}</h1>
            <h1>Total: {tour.priceForAllTourist}$</h1>
          </div>
          <div className={classes.image}>
            <img src={tour.photo} alt={tour.title} />
          </div>
        </div>
      ))}
      <h1 className={classes.title}>Total order price: {totalOrderPrice}$</h1>
    </div>
  );
};
export default BookedTour;
