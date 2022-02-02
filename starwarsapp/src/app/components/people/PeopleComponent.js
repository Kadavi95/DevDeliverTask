import React, { useState } from "react";
import { PeopleContainer } from "./PeopleContainer";

export function PeopleComponent(props) {
  const [peopleSorted, setPeopleSorted] = useState([]);
  const [genre, setGenre] = useState("");
  const { people } = props;
  const PeopleArray = {...people}

  console.log(people);
  const sortPeopleByGender = (value) => {
    setGenre(value);
    

    
  };

  return (
    <>
      <PeopleContainer>
        <select
          value={genre}
          onChange={(event) => sortPeopleByGender(event.target.value)}
        >
          <option value="male">Mężczyźni</option>
          <option value="female">Kobiety</option>
          <option value="n/a">Nieoznaczone</option>
          <option value="">Wszyscy</option>
        </select>
      </PeopleContainer>
    </>
  );
}
