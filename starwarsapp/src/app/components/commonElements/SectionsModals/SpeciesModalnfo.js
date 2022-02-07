import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";
import { PElement } from "./PElement";


export function SpeciesModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa: <PElement>{item.name}</PElement></LiElement>
        <LiElement>Klasyfikacja: <PElement>{item.classification}</PElement></LiElement>
        <LiElement>Tytuł: <PElement>{item.designation}</PElement></LiElement>
        <LiElement>Wzrost <PElement>{item.average_height}</PElement></LiElement>
        <LiElement>Język: <PElement>{item.language}</PElement></LiElement>

      </UlList>
    </>
  );
}
