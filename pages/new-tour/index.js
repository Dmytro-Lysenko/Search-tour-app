import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";
import NewTourForm from "../../components/tours/NewTourForm";

const NewTour = () => {
  const router = useRouter();
  

  async function addTourHandler(enteredTour) {
    const response = await fetch("/api/new-tour", {
      method: "POST",
      body: JSON.stringify(enteredTour),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add new tour</title>
        <meta
          name="description"
          content="Add new tour and help other to learn moore about new countries!"
        />
      </Head>
      <NewTourForm onAddTour={addTourHandler} />
    </Fragment>
  );
};

export default NewTour;
