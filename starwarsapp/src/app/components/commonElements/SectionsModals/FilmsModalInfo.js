import React from "react";
import styled from "styled-components";
import { LiElement } from "./LiElement";

const UlList = styled.ul``;


export function FilmsModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa Planety: {item.name}</LiElement>
        <LiElement>Położenie {item.diameter}</LiElement>
        <LiElement>Grawitacja  {item.gravity}</LiElement>
        <LiElement>Czas obrotu: {item.rotation_period}</LiElement>
        <LiElement>Czas trwania roku: {item.orbital_period}</LiElement>
        <LiElement>Rodzaj terenu: {item.terrain}</LiElement>

      </UlList>
    </>
  );
}
