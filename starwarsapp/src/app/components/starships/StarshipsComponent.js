import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { StarshipsOptionsComponent } from "./StarshipsOptonsComponent";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { StarshipsModal } from "../commonElements/SectionsModals/StarshipsModal";

export function StarshipsComponent(props) {
  const [starshipsSorted, setStarshipsSorted] = useState([]);
  const [crew, setCrew] = useState("100");
  const [name, setName] = useState("");
  const [openedModal, setOpenedModal] = useState("");
  const { starships } = props;
  const StarshipsResult = starships.results;

  console.log(StarshipsResult);
  const showModal = (valueOfOpenedModal) => {
    setOpenedModal(valueOfOpenedModal);
  };

  useEffect(() => {
    if (StarshipsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = StarshipsResult.filter(
        (item) => item.crew < crew
      );
      console.log(InitialSorted);
      setStarshipsSorted(InitialSorted);
    }
  }, [StarshipsResult]);

  useEffect(() => {
    if (StarshipsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = StarshipsResult.filter(
        (item) => item.crew < crew
      );
      console.log("Tablica obiiektów spełniających warunek", InitialSorted);
      setStarshipsSorted(InitialSorted);
    }
  }, [crew]);
  useEffect(() => {
    if (StarshipsResult === undefined) {
      console.log("Undefined"); 
    } else {
      const InitialSorted = StarshipsResult.filter(
        (item) => item.crew < crew
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setStarshipsSorted(SecondarySorted);
    }
  }, [name, crew]);

  const singleCard = starshipsSorted.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal(item.name)}>
          Dowiedz się więcej
        </CardButton>
        <StarshipsModal
          isModalOpen={item.name === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></StarshipsModal>
      </CardStyled>
    );
  });
  const SingleOption = StarshipsOptionsComponent.map(({ id, value, text }) => {
    return (
      <OptionStyled key={id} value={value}>
        {text}
      </OptionStyled>
    );
  });
  return (
    <>
      <MainContainer>
        <InputContainer>
          <InputBrowser
            type="text"
            value={name}
            placeholder="Wpisz nazwę gatunku"
            onChange={(event) => setName(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <SelectStyled
            value={crew}
            onChange={(event) => {
              setCrew(event.target.value);
            }}
          >
            {SingleOption}
          </SelectStyled>
        </InputContainer>

        <GridContainer> {singleCard}</GridContainer>
      </MainContainer>
    </>
  );
}
