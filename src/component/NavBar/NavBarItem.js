import classes from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  return (
    <div className={`${classes.item} ${props.data.active && classes.active}`}>
      <div>
        <i class={`fa ${props.data.icon}`}></i>
      </div>
      <p className={classes.content}>{props.data.type}</p>
    </div>
  );
};

export default NavBarItem;
