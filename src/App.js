import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ShowCards from "./components/ShowCards/ShowCards";
import classes from "./App.module.css";

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [],
  });

  const [searchState, setSearchState] = useState({
    search: "",
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => setPersonState({ persons: res.data.data }));
  }, []);

  const inputSearchHandler = (event) => {
    setSearchState({ search: event.target.value });
  };
  return (
    <div className={classes.App}>
      <header>Person Card</header>
      <SearchBar changed={inputSearchHandler} />
      <ShowCards persons={personState.persons} input={searchState.search} />
    </div>
  );
};

export default App;
