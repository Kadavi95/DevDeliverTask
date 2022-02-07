import React from "react";

import { LiElement } from "./LiElement";
import { UlList } from "./UlList";
import { PElement } from "./PElement";

export function FilmsModalInfo({ item }) {
  return (
    <>
      <UlList>
        <LiElement>
          Nazwa Filmu: <PElement>{item.title}</PElement>
        </LiElement>
        <LiElement>
          Reżyser: <PElement>{item.director}</PElement>
        </LiElement>
        <LiElement>
          Data publikacji: <PElement>{item.release_date}</PElement>
        </LiElement>
        <LiElement>
          Producenci: <PElement>{item.producer}</PElement>
        </LiElement>
      </UlList>
    </>
  );
}
