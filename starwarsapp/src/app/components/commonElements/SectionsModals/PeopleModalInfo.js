import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";
import { PElement } from "./PElement";


export function PeopleModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Imię: <PElement>{item.name}</PElement></LiElement>
        <LiElement>Wzrost: <PElement>{item.height}</PElement></LiElement>
        <LiElement>Kolor włosów: <PElement>{item.hair_color}</PElement></LiElement>
        <LiElement>Rok urodzenia: <PElement>{item.birth_year}</PElement></LiElement>
        <LiElement>Kolor ciała: <PElement>{item.skin_color}</PElement></LiElement>
        <LiElement>Filmy: <PElement>{item.name}</PElement></LiElement>

      </UlList>
  
    </>
  );
}
