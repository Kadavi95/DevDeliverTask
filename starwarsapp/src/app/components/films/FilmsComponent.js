import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { FilmsComponentData } from "./FilmsComponentData";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { FilmsModal } from "../commonElements/SectionsModals/FilmsModal";

export function FilmsComponent(props) {
  const [planetsSorted, setPlanetsSorted] = useState([]);
  const [director, setDirector] = useState("George Lucas");
  const [title, setTitle] = useState("");
  const [openedModal, setOpenedModal] = useState("");
  const { films } = props;
  const FilmsResult = films.results;

  const showModal = (valueOfOpenedModal) => {
    setOpenedModal(valueOfOpenedModal);
  };

  useEffect(() => {
    if (FilmsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = FilmsResult.filter(
        (item) => item.director === director
      );
      console.log(InitialSorted);
      setPlanetsSorted(InitialSorted);
    }
  }, [FilmsResult]);

  useEffect(() => {
    if (FilmsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = FilmsResult.filter(
        (item) => item.director === director
      );
      console.log("Tablica obiiektów spełniających warunek", InitialSorted);
      setPlanetsSorted(InitialSorted);
    }
  }, [director]);
  useEffect(() => {
    if (FilmsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = FilmsResult.filter(
            (item) => item.director === director
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.title.toUpperCase().includes(title.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setPlanetsSorted(SecondarySorted);
    }
  }, [title, director]);

  const singleCard = planetsSorted.map((item) => {
    return (
      <CardStyled key={item.title}>
        <CardInfo>{item.title}</CardInfo>
        <CardButton onClick={() => showModal(item.title)}>
          Dowiedz się więcej
        </CardButton>
        <FilmsModal
          isModalOpen={item.title === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></FilmsModal>
      </CardStyled>
    );
  });
  const SingleOption = FilmsComponentData.map(({ id, value, text }) => {
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
            value={title}
            placeholder="Wpisz nazwę filmu"
            onChange={(event) => setTitle(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <SelectStyled
            value={director}
            onChange={(event) => {
              setDirector(event.target.value);
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
