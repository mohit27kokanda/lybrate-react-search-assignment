import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.SearchBar}>
      <input
        onChange={props.changed}
        type="email"
        placeholder="Search email..."
      />
      {/* <button>Search</button> */}
    </div>
  );
};
export default SearchBar;
