import styled from "styled-components";

export const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
