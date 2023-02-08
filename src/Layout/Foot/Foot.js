import classes from "./Foot.module.css";

const Foot = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Foot;
