import Button from "../../../UI/Button/Button";
import classes from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img className={classes.image} src={props.data["image_url"]} />
        <div className={classes.content}>
          {/*  */}
          <h3 className={classes.name}>{props.data.name}</h3>
          <p className={classes.distance}>{props.data.distance} from center</p>
          <div>
            <p className={classes.tag}>{props.data.tag}</p>
          </div>
          <p className={classes.description}>{props.data.description}</p>
          <p className={classes.type}>{props.data.type}</p>
          {props.data.free_cancel && (
            <div className={classes.cancel}>
              <p className={classes["title-free-cancel"]}>Free cancelation</p>
              <p className={classes["content-free-cancel"]}>
                You can cancel later, so lock in this great price today
              </p>
            </div>
          )}
        </div>
        <div className={classes.more}>
          <div className={classes.rank}>
            <p className={classes.rate_text}>{props.data.rate_text}</p>
            <p className={classes.rate}>{props.data.rate}</p>
          </div>
          <div className={classes.info}>
            <p className={classes.price}>${props.data.price}</p>
            <p className={classes.include}>Include taxes and fees</p>
            <Button className={classes.btn}>See availability</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;

// name: "Comfort Suites Airport",
//     distance: "200m",
//     tag: "Free Breakfast",
//     type: "Entire studio • 2 bathroom • 100m² 2 full bed",
//     description: "Studio Apartment",
//     free_cancel: true,
//     price: 140,
//     rate: 9.3,
//     rate_text: "Exceptional",
//     image_url: "./images/hotel_search_2.jpg",

// {
//   name: "Four Seasons Hotel",
//   distance: "100m",
//   tag: "Free Parking",
//   type: "1 bathroom • 51m² 2 full bed",
//   description: "Hotel in Lisbon",
//   free_cancel: false,
//   price: 99,
//   rate: 8.8,
//   rate_text: "Excellent",
//   image_url: "./images/hotel_search_3.jpg",
// },
