import { ModalBackground } from "../ModalBackground";
import { StarshipsModalInfo } from "./StarshipsModalInfo";
import React from "react";


export function StarshipsModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <StarshipsModalInfo item={item}/>
      </ModalBackground>
    )
  }
}