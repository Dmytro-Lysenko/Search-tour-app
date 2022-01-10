import NewMeetupForm from "../../components/tours/NewTourForm";

const NewTour = () => {
    const addTourHandler = (enteredTour) =>  {
        console.log(enteredTour);
    }

  return <NewMeetupForm onAddTour={addTourHandler} />;
};

export default NewTour;
