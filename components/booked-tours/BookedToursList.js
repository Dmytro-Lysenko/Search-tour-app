import BookedTour from "./BookedTour";

const BookToursList = (props) => {
  const number = Math.random();
//   console.log("list", props.bookedTour);
  return (
    <div>
      <h1>Booked tour list</h1>
      {/* {props.bookedTour.map((bookedTour) => (
        <BookedTour tours={bookedTour}  />
      ))} */}
    </div>
  );
};
export default BookToursList;
