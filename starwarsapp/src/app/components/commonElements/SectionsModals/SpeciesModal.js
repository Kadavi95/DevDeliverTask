import { ModalBackground } from "../ModalBackground";
import { SpeciesModalInfo } from "./SpeciesModalnfo";
import { TurnOffButton } from "../TurnOffModal";
import React from "react";


export function SpeciesModal({ isModalOpen, showModal, item }) {
  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();

  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground>
        <SpeciesModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}

