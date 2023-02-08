import classes from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div className={classes.items}>
      {props.data.map((item) => (
        <p className={classes.item}>{item}</p>
      ))}
    </div>
  );
};

export default FooterItem;
