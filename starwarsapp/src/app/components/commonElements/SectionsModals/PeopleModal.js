import { ModalBackground } from "../ModalBackground";
import { PeopleModalInfo } from "./PeopleModalInfo";
import React from "react";
import { TurnOffButton } from "../TurnOffModal";


export function PeopleModal({ isModalOpen, showModal, item }) {

  const TurnOffMod = (event) => {
    event.preventDefault();
    showModal();

  }
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground>
        <PeopleModalInfo item={item}/>
        <TurnOffButton onClick={(event) => TurnOffMod(event)}>Powrót </TurnOffButton>
      </ModalBackground>
    )
  }
}
