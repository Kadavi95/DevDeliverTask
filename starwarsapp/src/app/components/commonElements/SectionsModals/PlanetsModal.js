import { ModalBackground } from "../ModalBackground";
import { PlanetsModalInfo } from "./PlanetsModalInfo";
import { TurnOffButton } from "../TurnOffModal";
import React from "react";


export function PlanetsModal({ isModalOpen, showModal, item }) {
  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();

  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground>
        <PlanetsModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}

