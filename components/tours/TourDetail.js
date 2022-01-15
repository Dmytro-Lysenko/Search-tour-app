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
        <h1>Title: {props.title}</h1>
        <h1>Country: {props.country}</h1>
        <h1>Price: {props.price}$</h1>
        <h1>Date: {props.date}</h1>
        <p>{props.description}</p>
        <button className={classes.actions} onClick={backHandler}>
          Go back
        </button>
      </div>
    </Card>
  );
}

export default TourDetail;
