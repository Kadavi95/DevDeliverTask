import { ModalBackground } from "../ModalBackground";
import { FilmsModalInfo } from "./FilmsModalInfo";
import { TurnOffButton } from "../TurnOffModal";
import React from "react";


export function FilmsModal({ isModalOpen, showModal, item }) {
  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();


  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground >
        <FilmsModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}

