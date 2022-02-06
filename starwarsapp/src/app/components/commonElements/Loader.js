import styled, { keyframes } from "styled-components";
import React from "react";

const LoaderBackground = styled.section`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 15rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  display: ${({ isLoaderOpen }) => (isLoaderOpen ? "flex" : "none")};
`;

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const LoaderCircle = styled.div`
  width: 5rem;
  height: 5rem;
  border: 2rem solid #b2b807;
  border-top: 2rem solid #ee0f03;
  border-radius: 100%;
  animation: ${spinner} 1s linear infinite;
`;

export function Loader(props) {
  const {isLoaderOpen} = props;
  console.log(isLoaderOpen);
  return (
    <>
      <LoaderBackground isLoaderOpen={isLoaderOpen}>
        <LoaderCircle></LoaderCircle>
      </LoaderBackground>
    </>
  );
}
