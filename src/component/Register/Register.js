import Button from "../../UI/Button/Button";
import classes from "./Register.module.css";

const Register = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.register}>
        <h1 className={classes.title}>Save time, save money!</h1>
        <p className={classes.text}>
          Sign up and we'll send the best deals to you
        </p>
        <form className={classes.form}>
          <input
            className={classes.input}
            type="text"
            placeholder="Your Email"
          />
          <Button className={classes.btn}>Subcribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
