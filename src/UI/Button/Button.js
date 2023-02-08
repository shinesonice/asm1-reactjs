// template button

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
