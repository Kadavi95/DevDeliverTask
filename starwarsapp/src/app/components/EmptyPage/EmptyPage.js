import styled from "styled-components";
import React from "react";
import { MainContainer } from "../commonElements/MainContainer";

const InformationHeading = styled.h1`
  font-size: 2rem;
`;

const InnerContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 15rem);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
`;

export const EmptyPage = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <InformationHeading>Wybrana strona nie istnieje</InformationHeading>
      </InnerContainer>
    </MainContainer>
  );
};
