import classes from "./TourDetail.module.css";

function TourDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <h2>{props.country}</h2>
      <h1>{props.price}$</h1>
      <h1>{props.date}</h1>
      <p>{props.description}</p>
    </section>
  );
}

export default TourDetail;
