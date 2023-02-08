import classes from "./Head.module.css";

const Head = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Head;
