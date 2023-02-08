import classes from "./HeaderForm.module.css";
// import Button from "../../../UI/Button/Button";
import { NavLink } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { isDisabled } from "@testing-library/user-event/dist/utils";
const HeaderForm = (props) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDate, setShowDate] = useState(false);
  // submit form
  const submitHandle = (e) => {
    e.preventDefault();
  };
  // while click input date, show/hide date range
  const clickHandle = () => {
    setShowDate((prev) => !prev);
  };
  return (
    <div className={classes["container-form"]}>
      <form className={classes.form} onSubmit={submitHandle}>
        {/* where */}
        <div className={classes.input}>
          <label htmlFor="where">
            <i class="fa fa-bed"></i>
          </label>
          <input type="text" id="where" placeholder="Where are you going" />
        </div>
        {/* date */}
        <div className={`${classes.input} ${classes.date}`}>
          <label htmlFor="date">
            <i class="fa fa-calendar"></i>
          </label>
          <input
            type="text"
            id="date"
            value={`${state[0].startDate.toISOString().split("T")[0]} to ${
              state[0].endDate && state[0].endDate.toISOString().split("T")[0]
            }`}
            readOnly
            onClick={clickHandle}
          />
          <div className={`${classes.date_box} ${!showDate && classes.hidden}`}>
            <DateRange
              className={` ${classes.daterange}`}
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>
        </div>
        {/* room */}
        <div className={classes.input}>
          <label htmlFor="num">
            <i class="fa fa-female"></i>
          </label>
          <input
            type="number"
            id="num"
            placeholder="1 aduit - 0 children - 1 room"
          />
        </div>
        {/* button submit */}
        <NavLink to="./search" className={classes.btn}>
          Search
        </NavLink>
      </form>
    </div>
  );
};

export default HeaderForm;
