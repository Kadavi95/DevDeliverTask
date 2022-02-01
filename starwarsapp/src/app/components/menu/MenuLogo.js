import styled from "styled-components";
import React from 'react';
import {GiDeathStar} from "react-icons/gi";

console.log(GiDeathStar);
const LogoSVG = styled(GiDeathStar)`
  width: 10rem;
  height: 10rem;
  color: #ffe919;

`

export function MenuLogo() {
  return (
    <>
      <LogoSVG/>
    </>
  );
}
