import { MongoClient } from "mongodb";
import BookToursList from "../../components/booked-tours/BookedToursList";

const BookedTours = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#77002e", fontSize: "2.2rem" }}>
        Booked Tour Orders
      </h1>
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

  client.close();

  return {
    props: {
      tours: tours.map((tour, index) => tour[0]),
    },
    revalidate: 3,
  };
}
