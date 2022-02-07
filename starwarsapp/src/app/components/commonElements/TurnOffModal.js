import styled from "styled-components";

export const TurnOffButton = styled.button`
  color: 000;
  background-color: #b2b807;
  cursor: pointer;
  padding: 1rem 3rem;
  font-size: 2rem;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: 1rem;
  transition: .35s all ease-in-out;
  &:hover {
    box-shadow: inset -7rem 0 0 0 #000, inset 7rem 0 0 0 #000;
    color: #b2b807;
    border: 0px solid transparent;
  }
  @media screen and (max-width: 768px) {
   &:hover{
    box-shadow: none;
    color: #000;
    border: none;
   } 
  }
`;
