import styled from "styled-components";
import React from "react";

const LoaderBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: pink;
  transform: ${({ isOpen }) =>
    isOpen ? "display:flex" : "display: none"};
`;

const LoaderCircle = styled.div`

`

export function Loader(props) {
            console.log(props);
  return (
    <>
      <LoaderBackground>

      </LoaderBackground>
    </>
  );
}
