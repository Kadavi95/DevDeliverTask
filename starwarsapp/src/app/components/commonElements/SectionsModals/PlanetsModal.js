import { ModalBackground } from "../ModalBackground";
import { PlanetsModalInfo } from "./PlanetsModalInfo";
import React from "react";


export function PlanetsModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <PlanetsModalInfo item={item}/>
      </ModalBackground>
    )
  }
}

