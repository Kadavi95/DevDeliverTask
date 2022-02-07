import React, { useState } from "react";
import { MenuLogo } from "./MenuLogo";
import { MenuContainer } from "./MenuContainer";
import { MenuButttonsNormal } from "./MenuButtonsNormal";
import { FakeDiv } from "./FakeDiv";
import { MenuMobileSwitch } from "./MenuMobileSwitch";
import { MenuButtonsMobile } from "./MenuButtonsMobile";
import { useNavigate } from "react-router-dom";

export function MenuComponent() {
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  const changeStateOfMobileMenu = () => {
    setIsHidden(!isHidden);
  };

  const changeLocationDefault = () => {
    navigate("/");
  };

  return (
    <>
      <MenuContainer>
        <FakeDiv />
        <MenuLogo changeLocationDefault={changeLocationDefault} />
        <MenuButttonsNormal />
        <MenuMobileSwitch
          isHidden={isHidden}
          changeStateOfMobileMenu={changeStateOfMobileMenu}
        />
        <MenuButtonsMobile
          isHidden={isHidden}
          changeStateOfMobileMenu={changeStateOfMobileMenu}
        />
      </MenuContainer>
    </>
  );
}
