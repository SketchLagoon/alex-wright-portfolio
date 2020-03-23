import React from 'react';

import { NavItemContainer, NavItemText } from "./MobileNavMenuLink-Styles"

const MobileNavMenuLink = ({activeNavItem, label, icon, handleCarouselItemChange}) => {
  return (
    <NavItemContainer onClick={()=>{handleCarouselItemChange(activeNavItem)}}>
      {icon()}
      <NavItemText>
        {label.toUpperCase()}
      </NavItemText>
    </NavItemContainer>
  );
}

export default MobileNavMenuLink;
