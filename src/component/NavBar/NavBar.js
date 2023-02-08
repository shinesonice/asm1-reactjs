import Button from "../../UI/Button/Button";
import classes from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";

const DUMMY = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const NavBar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h4 className={classes.logo}>Booking Website</h4>
        <div className={classes.login}>
          <Button className={classes.btn}>Login</Button>
          <Button className={classes.btn}>Register</Button>
        </div>
      </div>
      <div className={classes.bottom}>
        {DUMMY.map((item) => (
          <NavBarItem data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
