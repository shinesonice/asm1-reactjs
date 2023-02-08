import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Layout;
