import React from 'react';

import {  } from "./MobileNavMenuLink-Styles"

const MobileNavMenuLink = ({activeNavItem, label, icon, handleCarouselItemChange, toggleOpen}) => {
  return (
    <NavItemContainer onClick={()=>{handleCarouselItemChange(activeNavItem);toggleOpen();}}>
      {icon()}
      <NavItemText>
        {label.toUpperCase()}
      </NavItemText>
    </NavItemContainer>
  );
}

export default MobileNavMenuLink;
