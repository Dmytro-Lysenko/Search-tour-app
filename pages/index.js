//"our-domain.com/""
import Head from "next/head";
import { MongoClient } from "mongodb";

import TourList from "../components/tours/TourList";
import CartProvider from "../components/store/CartProvider";
import { Fragment } from "react";



const HomePage = (props) => {
  return (
    // <CartProvider>

    <Fragment>
      <Head>
        <title>Tours</title>
        <meta
          name="description"
          content="Choose some nice tour to visit new country!"
        />
      </Head>
      <TourList tours={props.tours} />
    </Fragment>

    // </CartProvider>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/tours?retryWrites=true&w=majority"
  );
  const db = client.db();

  const toursCollections = db.collection("tours");

  const tours = await toursCollections.find().toArray();

  client.close();

  return {
    props: {
      tours: tours.map((tour) => ({
        title: tour.title,
        country: tour.country,
        date: tour.date,
        photo: tour.photo,
        price: tour.price,
        description: tour.description,
        id: tour._id.toString(),
      })),
    },
    revalidate: 3,
  };
}

export default HomePage;
