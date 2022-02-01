import styled from "styled-components";
import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const FaIconsContainer = styled.div`
  height: 100%;
  display: none;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const IconCloseMenu = styled(FaTimes)`
  width: 5rem;
  height: 5rem;
  color: #b2b807;
  cursor: pointer;
`;
const IconOpenMenu = styled(FaBars)`
  height: 5rem;
  width: 5rem;
  color: #b2b807;
  cursor: pointer;
`;

export function MenuMobileSwitch(props) {
  let { isHidden, changeStateOfMobileMenu } = props;

  return (
    <>
      <FaIconsContainer>
        {isHidden === false ? (
          <IconOpenMenu onClick={() => changeStateOfMobileMenu()} />
        ) : (
          <IconCloseMenu onClick={() => changeStateOfMobileMenu()} />
        )}
      </FaIconsContainer>
    </>
  );
}
