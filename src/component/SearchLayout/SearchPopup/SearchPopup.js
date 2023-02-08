import classes from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={classes.container}>
      <div className={classes.popup}>
        <h3 className={classes.title}>Search</h3>
        <div className={classes.form}>
          <div>
            <label className={classes.label} htmlFor={"destination"}>
              Destination
            </label>
            <input className={classes.input} type="text" id="destination" />
          </div>
          <div>
            <label className={classes.label} htmlFor={"check-in-date"}>
              Check-in Date
            </label>
            <input className={classes.input} type="text" id="check-in-date" />
          </div>
          <div>
            <div>
              <p className={classes.p}>Options</p>
            </div>
            <div className={classes.options}>
              <label>Min price per night</label>
              <input type="number" />
              <label>Max price per night</label>
              <input type="number" />
              <label>Aduit</label>
              <input type="number" />
              <label>Children</label>
              <input type="number" />
              <label>Room</label>
              <input type="number" />
            </div>
          </div>
          <button className={classes["btn-submit"]}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
