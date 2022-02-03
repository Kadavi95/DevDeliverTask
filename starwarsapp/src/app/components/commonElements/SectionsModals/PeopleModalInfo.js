import React from "react";
import styled from "styled-components";

const UlList = styled.ul``;
const LiElement = styled.li``;

export function PeopleModalInfo({item}) {
// console.log(item.films);
// const ArrayOfFilms = item.films;
// const ArrayOfObjectFilms = [];
// ArrayOfFilms.forEach(element => {
//   const response = await fetch(element);
//   const data = response.json();
//   ArrayOfObjectFilms.push(data);
// });
// console.log(ArrayOfObjectFilms);
  return (
    <>
      <UlList>
        <LiElement>Imię: {item.name}</LiElement>
        <LiElement>Wzrost: {item.height}</LiElement>
        <LiElement>Kolor włosów: {item.hair_color}</LiElement>
        <LiElement>Rok urodzenia: {item.birth_year}</LiElement>
        <LiElement>Kolor ciała: {item.skin_color}</LiElement>
        <LiElement>Filmy: {item.name}</LiElement>

      </UlList>
    </>
  );
}
