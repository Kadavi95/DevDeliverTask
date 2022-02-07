import React from "react";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";
import { PElement } from "./PElement";

export function VehicleModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa: <PElement>{item.name}</PElement></LiElement>
        <LiElement>Prędkość: <PElement>{item.max_atmosphering_speed}</PElement></LiElement>
        <LiElement>Załoga: <PElement>{item.crew}</PElement></LiElement>
        <LiElement>Długość: <PElement>{item.length}</PElement></LiElement>
        <LiElement>Producent: <PElement>{item.manufacturer}</PElement></LiElement>


      </UlList>
    </>
  );
}
