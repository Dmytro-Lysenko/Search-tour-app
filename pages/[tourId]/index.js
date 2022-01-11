import { MongoClient, ObjectId } from "mongodb";
import TourDetail from "../../components/tours/TourDetail";

const TourDetails = (props) => {
  return (
    <TourDetail
      title={props.tourData.title}
      country={props.tourData.title}
      date={props.tourData.date}
      photo={props.tourData.photo}
      price={props.tourData.price}
      description={props.tourData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/tours?retryWrites=true&w=majority"
  );
  const db = client.db();

  const toursCollections = db.collection("tours");

  const tours = await toursCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: tours.map((tour) => ({ params: { tourId: tour._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const tourId = context.params.tourId;

  const client = await MongoClient.connect(
    "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/tours?retryWrites=true&w=majority"
  );
  const db = client.db();

  const toursCollections = db.collection("tours");

  const selectedTour = await toursCollections.findOne({
    _id: ObjectId(tourId),
  });

  client.close();

  return {
    props: {
      tourData: {
        id: selectedTour._id.toString(),
        title: selectedTour.title,
        country: selectedTour.country,
        date: selectedTour.date,
        photo: selectedTour.photo,
        price: selectedTour.price,
        description: selectedTour.description,
      },
    },
  };
}

export default TourDetails;
