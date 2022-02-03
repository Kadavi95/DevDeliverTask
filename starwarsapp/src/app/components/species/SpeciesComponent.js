import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { SpeciesOptionsData } from "./SpeciesOptionsData";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { SpeciesModal } from "../commonElements/SectionsModals/SpeciesModal";

export function SpeciesComponent(props) {
  const [speciesSorted, setSpeciesSorted] = useState([]);
  const [classification, setClassification] = useState("mammal");
  const [name, setName] = useState("");
  const [openedModal, setOpenedModal] = useState("");
  const { species } = props;
  const SpeciesResult = species.results;

  console.log(SpeciesResult);
  const showModal = (valueOfOpenedModal) => {
    setOpenedModal(valueOfOpenedModal);
  };

  useEffect(() => {
    if (SpeciesResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = SpeciesResult.filter(
        (item) => item.classification === classification
      );
      console.log(InitialSorted);
      setSpeciesSorted(InitialSorted);
    }
  }, [SpeciesResult]);

  useEffect(() => {
    if (SpeciesResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = SpeciesResult.filter(
        (item) => item.classification === classification
      );
      console.log("Tablica obiiektów spełniających warunek", InitialSorted);
      setSpeciesSorted(InitialSorted);
    }
  }, [classification]);
  useEffect(() => {
    if (SpeciesResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = SpeciesResult.filter(
        (item) => item.classification === classification
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setSpeciesSorted(SecondarySorted);
    }
  }, [name, classification]);

  const singleCard = speciesSorted.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal(item.name)}>
          Dowiedz się więcej
        </CardButton>
        <SpeciesModal
          isModalOpen={item.name === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></SpeciesModal>
      </CardStyled>
    );
  });
  const SingleOption = SpeciesOptionsData.map(({ id, value, text }) => {
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
            value={classification}
            onChange={(event) => {
              setClassification(event.target.value);
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
