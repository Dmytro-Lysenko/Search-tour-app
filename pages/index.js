//"our-domain.com/""
import Head from "next/head";
import { MongoClient } from "mongodb";

import TourList from "../components/tours/TourList";
import AllTourContext from "../components/store/allTours-context";
import CartProvider from "../components/store/CartProvider";
import { Fragment, useContext, useState } from "react";
import SearchForm from "../components/search/SearchForm";

const HomePage = (props) => {
  const allToursCtx = useContext(AllTourContext);
  allToursCtx.allTours = props.tours;
  const [allTours, setAllTours] = useState(allToursCtx.allTours);
 

  const sortHandler = (input) => {
    allToursCtx.allTours = input;
    allToursCtx.setTours(input);
  };

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
      <SearchForm onInput={sortHandler} tours={allTours} />
      <TourList tours={allTours} />
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
