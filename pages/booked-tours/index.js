import { MongoClient } from "mongodb";
import BookToursList from "../../components/booked-tours/BookedToursList";

const BookedTours = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Booked tours</h1>
      {/* {props.tours.map((tour) =>
        tour.map((item) => {
          return (
            <div key={number}>
              <h1>title: {item.title}</h1>
              <h2>price: {item.price}</h2>
            </div>
          );
        })
      )} */}
      <BookToursList bookedTour={props.tours} />
    </div>
  );
};

export default BookedTours;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/booked-tours?retryWrites=true&w=majority"
  );
  const db = client.db();

  const bookedToursCollections = db.collection("booked-tours");

  const tours = await bookedToursCollections.find().toArray();

  console.log(tours._id);
  client.close();
  console.log(tours._id);
  // console.log(tours._id);

  // console.log(tours.slice(-1));

  return {
    props: {
      tours: tours.map((tour) => tour[0]),
      id: 333,
    },
    revalidate: 3,
  };
}
