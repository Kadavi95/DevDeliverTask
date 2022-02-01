import { MenuItems } from "../../../assets/MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const NavMenu = styled.nav`

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const UlMenu = styled.ul``;
const LiElement = styled.li`
  display: inline;
  padding-left: 1rem;
  cursor: pointer;
`;
const LinkElement = styled(Link)`
  color: #b2b807;
  text-decoration: none;
  font-size: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  transition: all 0.35s;
  &:hover {
    color: #ee0f03;
    border-bottom: 1px solid #ee0f03;
  }
`;
export function MenuButttonsNormal() {
  const SingleButton = MenuItems.map(({ id, name, url }) => {
    return (
      <LiElement key={id}>
        <LinkElement to={`/${url}`}>{name}</LinkElement>
      </LiElement>
    );
  });
  return (
    <>
      <NavMenu>
        <UlMenu>{SingleButton}</UlMenu>
      </NavMenu>
    </>
  );
}
