import TourItem from "./TourItem";
import classes from "./TourList.module.css";

function TourList(props) {
  return (
    <ul className={classes.list}>
      {props.tours.map((tour) => (
        <TourItem
          key={tour.id}
          id={tour.id}
          title={tour.title}
          country={tour.country}
          date={tour.date}
          photo={tour.photo}
          price={tour.price}
          description={tour.description}
        />
      ))}
    </ul>
  );
}

export default TourList;
