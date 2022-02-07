import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";


export function PeopleModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Imię: <p>{item.name}</p></LiElement>
        <LiElement>Wzrost: <p>{item.height}</p></LiElement>
        <LiElement>Kolor włosów: <p>{item.hair_color}</p></LiElement>
        <LiElement>Rok urodzenia: <p>{item.birth_year}</p></LiElement>
        <LiElement>Kolor ciała: <p>{item.skin_color}</p></LiElement>
        <LiElement>Filmy: <p>{item.name}</p></LiElement>

      </UlList>
  
    </>
  );
}
