import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";
import { PElement } from "./PElement";



export function PlanetsModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa Planety: <PElement>{item.name}</PElement></LiElement>
        <LiElement>Położenie: <PElement>{item.diameter}</PElement></LiElement>
        <LiElement>Grawitacja: <PElement>{item.gravity}</PElement></LiElement>
        <LiElement>Czas obrotu: <PElement>{item.rotation_period}</PElement></LiElement>
        <LiElement>Czas trwania roku: <PElement>{item.orbital_period}</PElement></LiElement>
        <LiElement>Rodzaj terenu: <PElement>{item.terrain}</PElement></LiElement>

      </UlList>
    </>
  );
}
