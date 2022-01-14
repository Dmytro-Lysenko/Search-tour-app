const BookedTour = (props) => {

  const start = Math.random().toFixed(8)
  return (
    <div>
      <h1>Booked tours</h1>
      {props.tours.map((tour) => (
        <div key={start}>
          <h1>Title: {tour.title}</h1>
          <h1>Price: {tour.price}</h1>
          <h1>Date: {tour.date}</h1>
        </div>
      ))}
    </div>
  );
};
export default BookedTour;
