import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { PlanetsOptionsData } from "./PlanetsOptionsData";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { PlanetsModal } from "../commonElements/SectionsModals/PlanetsModal";

export function PlanetsComponent(props) {
  const [planetsSorted, setPlanetsSorted] = useState([]);
  const [rotation, setRotation] = useState("15");
  const [name, setName] = useState("");
  const [openedModal, setOpenedModal] = useState("");
  const { planets } = props;
  const PlanetsResult = planets.results;

  const showModal = (valueOfOpenedModal) => {
    console.log(valueOfOpenedModal, "valueOfOpenedModal");
    setOpenedModal(valueOfOpenedModal);
  };

  useEffect(() => {
    if (PlanetsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PlanetsResult.filter(
        (item) => item.rotation_period < rotation
      );
      console.log(InitialSorted);
      setPlanetsSorted(InitialSorted);
    }
  }, [PlanetsResult]);

  useEffect(() => {
    if (PlanetsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PlanetsResult.filter(
        (item) => item.rotation_period < rotation
      );
      console.log("Tablica obiiektów spełniających warunek", InitialSorted);
      setPlanetsSorted(InitialSorted);
    }
  }, [rotation]);
  useEffect(() => {
    if (PlanetsResult === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = PlanetsResult.filter(
        (item) => item.rotation_period < rotation
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setPlanetsSorted(SecondarySorted);
    }
  }, [name, rotation]);

  const singleCard = planetsSorted.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal(item.name)}>
          Dowiedz się więcej
        </CardButton>
        <PlanetsModal
          isModalOpen={item.name === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></PlanetsModal>
      </CardStyled>
    );
  });
  const SingleOption = PlanetsOptionsData.map(({ id, value, text }) => {
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
            placeholder="Wpisz nazwę planety"
            onChange={(event) => setName(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <SelectStyled
            value={rotation}
            onChange={(event) => {
              setRotation(event.target.value);
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
