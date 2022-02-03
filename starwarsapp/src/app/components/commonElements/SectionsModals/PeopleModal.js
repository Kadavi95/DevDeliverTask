import { ModalBackground } from "../ModalBackground";
import { PeopleModalInfo } from "./PeopleModalInfo";
import React from "react";


export function PeopleModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <PeopleModalInfo item={item}/>
      </ModalBackground>
    )
  }
}
