import Button from "../../UI/Button/Button";
import classes from "./Header.module.css";
import HeaderForm from "./HeaderForm/HeaderForm";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>A lifetime of discounts? It's Genius.</h2>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <Button className={classes.btn}>Sign in / Register</Button>
        <HeaderForm />
      </div>
    </div>
  );
};

export default Header;
