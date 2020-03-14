import React from 'react';

import { NavItemContainer, NavItemText } from "./NavMenuLink-Styles"

const NavMenuLink = ({label, icon}) => {
  return (
    <NavItemContainer>
      {icon()}
      <NavItemText>
        {label.toUpperCase()}
      </NavItemText>
    </NavItemContainer>
  );
}

export default NavMenuLink;
