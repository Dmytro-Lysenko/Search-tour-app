import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./TourDetail.module.css";

function TourDetail(props) {
  const route = useRouter();

  const backHandler = () => {
    route.push("/");
  };

  return (
    <Card>
      <div className={classes.image}>
        <img src={props.photo} alt={props.title} />
      </div>
      <h1>Title: {props.title}</h1>
      <h2>Country: {props.country}</h2>
      <h3>Price: {props.price}$</h3>
      <h1>Date: {props.date}</h1>
      <p>{props.description}</p>
      <button onClick={backHandler}>Go back</button>
    </Card>
  );
}

export default TourDetail;
