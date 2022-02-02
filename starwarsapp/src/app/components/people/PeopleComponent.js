import React, { useState, useEffect } from "react";
import { PeopleContainer } from "./PeopleContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { PeopleOptionsData } from "./PeopleOptionsData";

export function PeopleComponent(props) {
  const [peopleSorted, setPeopleSorted] = useState([]);
  const [genre, setGenre] = useState("male");
  const [name, setName] = useState("");

  const { people } = props;
  const PeopleResults = people.results;
  console.log(PeopleResults);

  useEffect(() => {
    if (PeopleResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PeopleResults.filter(
        (item) => item.gender === genre
      );
      console.log(InitialSorted);
      setPeopleSorted(InitialSorted);
    }
  }, [PeopleResults]);

  useEffect(() => {
    if (PeopleResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PeopleResults.filter(
        (item) => item.gender === genre
      );
      console.log(InitialSorted);
      setPeopleSorted(InitialSorted);
    }
  }, [genre]);
  useEffect(() => {
    if (PeopleResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PeopleResults.filter(
        (item) => item.gender === genre
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setPeopleSorted(SecondarySorted);
    }
  }, [name, genre]);

  const singleContainer = peopleSorted.map((item) => {
    return (
      <div key={item.name}>
        <p>{item.name}</p>
      </div>
    );
  });
  const SingleOption = PeopleOptionsData.map(({ id, value, text }) => {
    return (
      <OptionStyled key={id} value={value}>
        {text}
      </OptionStyled>
    );
  });
  console.log(name);
  return (
    <>
      <PeopleContainer>
        <InputContainer>
          <InputBrowser
            type="text"
            value={name}
            placeholder="Wpisz imię bohatera"
            onChange={(event) => setName(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <SelectStyled
            value={genre}
            onChange={(event) => {
              setGenre(event.target.value);
            }}
          >
            {/* <OptionStyled value="male">Mężczyźni</OptionStyled>
            <OptionStyled value="female">Kobiety</OptionStyled>
            <OptionStyled value="n/a">Nieoznaczone</OptionStyled> */}
            {SingleOption}
          </SelectStyled>
        </InputContainer>

        {singleContainer}
      </PeopleContainer>
    </>
  );
}
