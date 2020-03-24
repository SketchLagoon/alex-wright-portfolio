import React from "react";

import MobileNavMenuLink from "../../molecules/MobileNavMenuLink/MobileNavMenuLink"

import {
    MobileNavMenuWrapper
} from "./MobileNavMenu-Styles";

const MobileNavMenu = ({ User, toggleOpen, handleCarouselItemChange }) => {
    // console.log(User.icons)
    const navLinks = User.navLinks
    const icons = User.icons

  return (
    <MobileNavMenuWrapper>
      {navLinks && navLinks.map( (link, i) => <MobileNavMenuLink key={i} activeNavItem={i} icon={icons[i]} label={link} handleCarouselItemChange={handleCarouselItemChange} toggleOpen={toggleOpen} animDelay={Math.round(i)/10}/> )}
    </MobileNavMenuWrapper>
  );
};

export default MobileNavMenu;
