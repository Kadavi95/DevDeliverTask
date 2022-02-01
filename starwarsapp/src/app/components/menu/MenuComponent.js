import React from "react";
import { MenuLogo } from "./MenuLogo";
import { MenuContainer } from "./MenuContainer";
import { MenuButttonsNormal } from "./MenuButtonsNormal";
import styled from "styled-components";


export function MenuComponent() {
  return (
    <>
      <MenuContainer>
        <MenuLogo/>
        <MenuButttonsNormal/>
      </MenuContainer>
    </>
  );
}
