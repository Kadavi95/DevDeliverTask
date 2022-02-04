import React, { useState, useEffect } from "react";
import { ModalBackground } from "../commonElements/ModalBackground";
import styled from "styled-components";

const FormContainer = styled.section`
  width: 100%;
  height: 50%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function LoginComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ModalBackground>
        <FormContainer>
                    
        </FormContainer>
      </ModalBackground>
    </>
  );
}
