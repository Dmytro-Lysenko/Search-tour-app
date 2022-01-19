import BookedTour from "./BookedTour";

const BookToursList = (props) => {
  const number = Math.random();
  console.log("list", props.bookedTour);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#77002e", fontSize: "2.2rem" }}>
        Booked Tour Orders
      </h1>
      {props.bookedTour.map((bookedTour, index) => (
        <BookedTour key={index + 1} id={index + 1} tours={bookedTour} />
      ))}
    </div>
  );
};
export default BookToursList;
