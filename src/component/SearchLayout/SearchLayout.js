import classes from "./SearchLayout.module.css";
import SearchList from "./SearchList/SearchList";
import SearchPopup from "./SearchPopup/SearchPopup";

const SearchLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes["search-layout"]}>
        <SearchPopup />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchLayout;
