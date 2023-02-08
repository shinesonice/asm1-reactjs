import classes from "./Hotel.module.css";
import HotelItem from "./HotelItem";

const DUMMY = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const Hotel = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.header}>
        <h2>Homes guests love</h2>
      </div>
      <div className={classes.type}>
        {DUMMY.map((item) => (
          <HotelItem data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
