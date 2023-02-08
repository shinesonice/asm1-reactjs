import { NavLink } from "react-router-dom";
import classes from "./HotelItem.module.css";

const HotelItem = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <img className={classes.image} src={props.data["image_url"]} />
      <NavLink to="./detail" className={classes.title}>
        {props.data.name}
      </NavLink>
      <p className={classes.city}>{props.data.city}</p>
      <p className={classes.price}>start from ${props.data.price}</p>
      <div className={classes.rank}>
        <p className={classes.rate}>{props.data.rate}</p>
        <p className={classes.type}>{props.data.type}</p>
      </div>
    </div>
  );
};

export default HotelItem;

// {
//   name: "Hilton Garden Inn",
//   city: "Berlin",
//   price: 105,
//   rate: 8.9,
//   type: "Excellent",
//   image_url: "./images/hotel_4.jpg",
// },
