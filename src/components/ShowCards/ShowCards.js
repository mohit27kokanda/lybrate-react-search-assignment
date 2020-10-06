import React from "react";
import classes from "./ShowCards.module.css";
import PersonCard from "./Card/PersonCard";

const ShowCards = (props) => {
  let filteredPersons = props.persons.filter((person) => {
    return person.email.toLowerCase().indexOf(props.input.toLowerCase()) !== -1;
  });
  if (filteredPersons.length > 0) {
    return filteredPersons.map((person) => {
      return <PersonCard key={person.id} person={person} />;
    });
  } else {
    return <p className={classes.notShow}>No Persons found!</p>;
  }
};

export default ShowCards;
