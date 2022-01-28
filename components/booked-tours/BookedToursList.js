import BookedTour from "./BookedTour";

const BookToursList = (props) => {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {props.bookedTour.map((bookedTour, index) => (
        <BookedTour key={index + 1} id={index + 1} tours={bookedTour} />
      ))}
    </div>
  );
};
export default BookToursList;
