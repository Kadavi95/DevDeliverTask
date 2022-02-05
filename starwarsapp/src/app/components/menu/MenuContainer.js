import styled from "styled-components";

export const MenuContainer = styled.header`
  margin: 0 auto;
  width: 100%;
  max-width: 128rem;
  height: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: #000;
  }

`;
