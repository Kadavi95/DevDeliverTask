import React from "react";
import { LiElement } from "./LiElement";

import { UlList } from "./UlList";


export function SpeciesModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa:  <p>{item.name}</p></LiElement>
        <LiElement>Klasyfikacja: <p>{item.classification}</p></LiElement>
        <LiElement>Tytuł: <p>{item.designation}</p></LiElement>
        <LiElement>Wzrost <p>{item.average_height}</p></LiElement>
        <LiElement>Język: <p>{item.language}</p></LiElement>

      </UlList>
    </>
  );
}
