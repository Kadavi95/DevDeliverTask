import styled from "styled-components";
import React from 'react';
import {GiDeathStar} from "react-icons/gi";


const LogoSVG = styled(GiDeathStar)`
  width: 10rem;
  height: 10rem;
  color: #ffe919;
  transition: .35s all ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ee0f03;
    
  }
`

export function MenuLogo(props) {
  const {changeLocationDefault} = props;
  return (
    <>
      <LogoSVG onClick={() => changeLocationDefault()}/>
    </>
  );
}
