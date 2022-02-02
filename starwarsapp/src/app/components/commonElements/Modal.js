import styled from "styled-components";
import React from "react";

const ModalBackground = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 20;
`;

export function Modal({ isModalOpen, showModal, item }) {
  if (!isModalOpen) {
    return null;
  } else {
    return(
      <ModalBackground onClick={() => showModal() }>

      </ModalBackground>
    )
  }
}
