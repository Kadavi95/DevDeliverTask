import React from "react";

import { LiElement } from "./LiElement";
import { UlList } from "./UlList";

export function FilmsModalInfo({ item }) {
  return (
    <>
      <UlList>
        <LiElement>
          Nazwa Filmu: <p>{item.title}</p>
        </LiElement>
        <LiElement>
          Reżyser: <p>{item.director}</p>
        </LiElement>
        <LiElement>
          Data publikacji: <p>{item.release_date}</p>
        </LiElement>
        <LiElement>
          Producenci: <p>{item.producer}</p>
        </LiElement>
      </UlList>
    </>
  );
}
