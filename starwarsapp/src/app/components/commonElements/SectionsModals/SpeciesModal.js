import { ModalBackground } from "../ModalBackground";
import { SpeciesModalInfo } from "./SpeciesModalnfo";
import React from "react";


export function SpeciesModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <SpeciesModalInfo item={item}/>
      </ModalBackground>
    )
  }
}

