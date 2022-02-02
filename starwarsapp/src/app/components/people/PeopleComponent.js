import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { PeopleOptionsData } from "./PeopleOptionsData";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { Modal } from "../commonElements/Modal";

export function PeopleComponent(props) {
  const [peopleSorted, setPeopleSorted] = useState([]);
  const [genre, setGenre] = useState("male");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { people } = props;
  const PeopleResults = people.results;
  console.log(PeopleResults);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

  const singleCard = peopleSorted.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal()}>Dowiedz się więcej</CardButton>
        <Modal isModalOpen={isModalOpen} showModal={showModal} item={item} />
      </CardStyled>
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
      <MainContainer>
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

        <GridContainer> {singleCard}</GridContainer>
      </MainContainer>
    </>
  );
}
