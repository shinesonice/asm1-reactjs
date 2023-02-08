import classes from "./TypeItem.module.css";

const TypeItem = (props) => {
  return (
    <div className={`${classes.item} ${props.className}`}>
      <img className={classes.image} src={props.data.image} />
      <div className={classes.content}>
        <h3 className={classes.title}>{props.data.name}</h3>
        <p className={classes.text}>{props.data.count} hotels</p>
      </div>
    </div>
  );
};

export default TypeItem;
