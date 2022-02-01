import React from "react";
import { PeopleContainer } from "./PeopleContainer";

export function PeopleComponent(props) {
  console.log(props);
  const {people} = props;

  console.log(people);
  return (
    <>
      <PeopleContainer>

      </PeopleContainer>
    </>
  );
}
