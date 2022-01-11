import { useRouter } from "next/router";
import NewMeetupForm from "../../components/tours/NewTourForm";

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

  return <NewMeetupForm onAddTour={addTourHandler} />;
};

export default NewTour;
