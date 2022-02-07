import { ModalBackground } from "../ModalBackground";
import { StarshipsModalInfo } from "./StarshipsModalInfo";
import React from "react";
import { TurnOffButton } from "../TurnOffModal";


export function StarshipsModal({ isModalOpen, showModal, item }) {
  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();

  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground>
        <StarshipsModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}