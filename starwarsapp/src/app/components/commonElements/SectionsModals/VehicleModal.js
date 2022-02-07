import { ModalBackground } from "../ModalBackground";
import { VehicleModalInfo } from "./VehicleModalInfo";
import { TurnOffButton } from "../TurnOffModal";
import React from "react";


export function VehicleModal({ isModalOpen, showModal, item }) {
  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();

  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground>
        <VehicleModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}