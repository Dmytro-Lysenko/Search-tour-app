import classes from "./TourDetail.module.css";

function TourDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.photo} alt={props.title} />
      <h1>Title: {props.title}</h1>
      <h2>Country: {props.country}</h2>
      <h3>Price: {props.price}$</h3>
      <h1>Date: {props.date}</h1>
      <p>{props.description}</p>
    </section>
  );
}

export default TourDetail;
