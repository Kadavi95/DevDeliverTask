import React, { useState } from "react";
import { MenuLogo } from "./MenuLogo";
import { MenuContainer } from "./MenuContainer";
import { MenuButttonsNormal } from "./MenuButtonsNormal";
import { FakeDiv } from "./FakeDiv";
import { MenuMobileSwitch } from "./MenuMobileSwitch";
import { MenuButtonsMobile } from "./MenuButtonsMobile";

export function MenuComponent() {
  const [isHidden, setIsHidden] = useState(false);

  const changeStateOfMobileMenu = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <MenuContainer>
        <FakeDiv />
        <MenuLogo />
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
