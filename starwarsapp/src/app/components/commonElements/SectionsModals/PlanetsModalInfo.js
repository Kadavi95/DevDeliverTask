import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";



export function PlanetsModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa Planety: <p>{item.name}</p></LiElement>
        <LiElement>Położenie <p>{item.diameter}</p></LiElement>
        <LiElement>Grawitacja  <p>{item.gravity}</p></LiElement>
        <LiElement>Czas obrotu: <p>{item.rotation_period}</p></LiElement>
        <LiElement>Czas trwania roku: <p>{item.orbital_period}</p></LiElement>
        <LiElement>Rodzaj terenu: <p>{item.terrain}</p></LiElement>

      </UlList>
    </>
  );
}
