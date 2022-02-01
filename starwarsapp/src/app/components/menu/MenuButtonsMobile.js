import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../../assets/MenuItems";

const NavMobile = styled.nav`
  width: 100vw;
  height: calc(100vh - 15rem);
  background-color: yellowgreen;
  display: none;
  position: fixed;
  top: 15rem;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 10;
  transition: 1s;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const UlMenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const LiElementMobile = styled.li`
  display: block;
`;

const LinkElementMobile = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 3rem;
`;

export function MenuButtonsMobile() {
  const SingleButtonMobile = MenuItems.map(({ id, name, url }) => {
    return (
      <LiElementMobile key={id}>
        <LinkElementMobile to={`/${url}`}>{name}</LinkElementMobile>
      </LiElementMobile>
    );
  });
  return (
    <>
      <NavMobile>
        <UlMenuMobile>{SingleButtonMobile}</UlMenuMobile>
      </NavMobile>
    </>
  );
}
