import React from "react";
import styled from "styled-components";
import { LiElement } from "./LiElement";
import { UlList } from "./UlList";

export function VehicleModalInfo({item}) {
  return (
    <>
      <UlList>
        <LiElement>Nazwa: <p>{item.name}</p></LiElement>
        <LiElement>Prędkość: <p>{item.max_atmosphering_speed}</p></LiElement>
        <LiElement>Załoga: <p>{item.crew}</p></LiElement>
        <LiElement>Długość: <p>{item.length}</p></LiElement>
        <LiElement>Producent: <p>{item.manufacturer}</p></LiElement>


      </UlList>
    </>
  );
}
