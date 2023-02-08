import classes from "./City.module.css";
import CityItem from "./CityItem";

// data

const DUMMY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.city}>
        {DUMMY.map((item) => (
          <CityItem data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default City;
