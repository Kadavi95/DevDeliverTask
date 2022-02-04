import { ModalBackground } from "../ModalBackground";
import { VehicleModalInfo } from "./VehicleModalInfo";
import React from "react";


export function VehicleModal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>
        <VehicleModalInfo item={item}/>
      </ModalBackground>
    )
  }
}