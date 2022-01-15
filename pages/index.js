//"our-domain.com/""
import Head from "next/head";
import { MongoClient } from "mongodb";

import TourList from "../components/tours/TourList";
import AllTourContext from "../components/store/allTours-context";
import CartProvider from "../components/store/CartProvider";
import { Fragment, useContext, useEffect, useState } from "react";
import SearchForm from "../components/search/SearchForm";

const HomePage = (props) => {
  const allToursCtx = useContext(AllTourContext);

  const [allTours, setAllTours] = useState(props.tours);
  const [sortedTours, setSortedTours] = useState([]);
  // console.log(allToursCtx.allTours);

  // console.log(sortedTours.length);
  // useEffect(() => {
  //   setAllTours(props.tours);
  // }, [props.tours]);

  const sortHandler = (input) => {
    allToursCtx.setTours(props.tours);
    // allToursCtx.setTours(props.tours.filter((tour) => tour.country === input));
    setSortedTours(
      props.tours.filter((tour) => {
        if (tour.title.includes(input)) {
          return tour;
        }
        if (tour.country.includes(input)) {
          return tour;
        }
      })
    );

    // const updTours = [];
    // props.tours.map((tour) => {
    //   if ((tour.title === input  || props.country === input)) {
    //     console.log(tour);
    //   }
    // });

    // console.log(allToursCtx.allTours);
    if (input === "") {
      allToursCtx.setTours(props.tours);
    }
    // const tours = [...allTours];
    // tours.filter((tour) => {
    //   if (tour.country === input) {
    //     const filtredTours = tour;
    //     console.log(filtredTours);
    //     setAllTours(filtredTours);
    //     console.log(allTours);
    //   }
    // });

    allToursCtx.searchTours(input);
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
      {sortedTours.length === 0 ? (
        <TourList tours={props.tours} />
      ) : (
        <TourList tours={sortedTours} />
      )}
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
