//"our-domain.com/""
import Head from "next/head";
import { MongoClient } from "mongodb";

import TourList from "../components/tours/TourList";
import AllTourContext from "../components/store/allTours-context";

import { Fragment, useContext, useEffect, useState } from "react";
import SearchForm from "../components/search/SearchForm";
import SortedTours from "../components/sorted-tours/SortedTours";

const HomePage = (props) => {
  const allToursCtx = useContext(AllTourContext);

  const [allTours, setAllTours] = useState(allToursCtx.allTours);
  const [sortedTours, setSortedTours] = useState(props.tours);

  // // console.log(sortedTours.length);
  // useEffect(() => {
  //   allToursCtx.setTours(props.tours);
  // }, []);
  // useEffect(() => {
  //   setSortedTours(sortedTours);
  // }, [sortedTours]);

  const searchHandler = (input) => {
    console.log(input);
    let data = [...props.tours];
    // allToursCtx.setTours(props.tours.filter((tour) => tour.country === input));
    setSortedTours(
      props.tours.filter((tour) => {
        if (tour.title.toLowerCase().includes(input.toLowerCase())) {
          return tour;
        }
        if (tour.country.toLowerCase().includes(input.toLowerCase())) {
          return tour;
        }
      })
    );

    if (input === "price") {
      const updDat = data.sort((a, b) => {
        {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          // a must be equel to 0
          return 0;
        }
      });
      console.log(updDat);
      setSortedTours(updDat);
    }

    if (input === "date") {
      const updDat = data.sort((a, b) => {
        {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }
          // a must be equel to 0
          return 0;
        }
      });
      console.log(updDat);
      setSortedTours(updDat);
    }

    if (input === "country") {
      const updData = data.sort((a, b) => {
        {
          if (a.country > b.country) {
            return 1;
          }
          if (a.country < b.country) {
            return -1;
          }
          // a must be equel to 0
          return 0;
        }
      });
      console.log(updData);
      setSortedTours(updData);
    }
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

      <SearchForm onInput={searchHandler} tours={allTours} />
      <div>
        <SortedTours onSort={searchHandler} />
        <TourList tours={sortedTours} />
        {/* {sortedTours.length === 0 ? (
          <TourList tours={props.tours} />
        ) : (
          <TourList tours={sortedTours} />
        )} */}
      </div>
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
