import styled from "styled-components";

export const FakeDiv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
  }
`;
