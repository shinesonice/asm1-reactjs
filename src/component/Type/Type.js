import classes from "./Type.module.css";
import TypeItem from "./TypeItem";

const DUMMY = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const Type = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.header}>
        <h2 className={classes.title}>Browser by property type</h2>
      </div>

      <div className={classes.type}>
        {DUMMY.map((item) => (
          <TypeItem data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Type;
