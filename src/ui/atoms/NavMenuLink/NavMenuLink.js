import React from 'react';

import { NavItemContainer, NavItemText } from "./NavMenuLink-Styles"

const NavMenuLink = ({activeNavItem, label, icon, handleCarouselItemChange, toggleOpen}) => {
  return (
    <NavItemContainer onClick={()=>{handleCarouselItemChange(activeNavItem);toggleOpen();}}>
      {icon()}
      <NavItemText>
        {label.toUpperCase()}
      </NavItemText>
    </NavItemContainer>
  );
}

export default NavMenuLink;
