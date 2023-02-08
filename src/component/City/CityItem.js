import classes from "./CityItem.module.css";

const CityItem = (props) => {
  return (
    <div className={`${classes.item} ${props.className}`}>
      <div></div>
      <img className={classes.image} src={props.data.image} />
      <div className={classes.content}>
        <h2 className={classes.title}>{props.data.name}</h2>
        <p className={classes.text}>{props.data.subText}</p>
      </div>
    </div>
  );
};

export default CityItem;
