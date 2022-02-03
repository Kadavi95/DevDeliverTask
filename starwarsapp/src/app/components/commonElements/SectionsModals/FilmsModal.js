import { ModalBackground } from "../ModalBackground";
import { FilmsModalInfo } from "./FilmsModalInfo";
import React from "react";


export function FilmsModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <FilmsModalInfo item={item}/>
      </ModalBackground>
    )
  }
}

