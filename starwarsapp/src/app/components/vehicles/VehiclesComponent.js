import React, { useState, useEffect } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { VehiclesOptionsData } from "./VehiclesOptionsData";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { VehicleModal } from "../commonElements/SectionsModals/VehicleModal";

export function VehiclesComponent(props) {
  const [vehiclesSorted, setVehiclesSorted] = useState([]);
  const [pace, setPace] = useState("mammal");
  const [name, setName] = useState("");
  const [openedModal, setOpenedModal] = useState("");
  const { vehicles } = props;
  const VehiclesResults = vehicles.results;

  const showModal = (valueOfOpenedModal) => {
    setOpenedModal(valueOfOpenedModal);
  };

  useEffect(() => {
    if (VehiclesResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = VehiclesResults.filter(
        (item) => item.max_atmosphering_speed < pace
      );
      console.log(InitialSorted);
      setVehiclesSorted(InitialSorted);
    }
  }, [VehiclesResults]);

  useEffect(() => {
    if (VehiclesResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = VehiclesResults.filter(
        (item) => item.max_atmosphering_speed < pace
      );
      console.log(InitialSorted);
      setVehiclesSorted(InitialSorted);
    }
  }, [pace]);
  useEffect(() => {
    if (VehiclesResults === undefined) {
      console.log("Undefined");
    } else {
      const InitialSorted = VehiclesResults.filter(
        (item) => item.max_atmosphering_speed < pace
      );
      const SecondarySorted = InitialSorted.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );
      console.log(InitialSorted);
      console.log(SecondarySorted);
      setVehiclesSorted(InitialSorted);
    }
  }, [name, pace]);

  const singleCard = vehiclesSorted.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal(item.name)}>
          Dowiedz się więcej
        </CardButton>
        <VehicleModal
          isModalOpen={item.name === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></VehicleModal>
      </CardStyled>
    );
  });
  const SingleOption = VehiclesOptionsData.map(({ id, value, text }) => {
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
            value={pace}
            onChange={(event) => {
              setPace(event.target.value);
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
