import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";

export function StarshipsModalInfo({ item }) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa: <p>{item.name}</p></LiElement>
        <LiElement>Załoga: <p>{item.crew}</p></LiElement>
        <LiElement>Długość: <p>{item.length}</p></LiElement>
        <LiElement>Prędkość nadświetlna: <p>{item.hyperdrive_rating}</p></LiElement>
        <LiElement>Producent: <p>{item.manufacturer}</p></LiElement>
      </UlList>
    </>
  );
}
