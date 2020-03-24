import React from 'react';

import { NavItemContainer, NavItemText } from "./MobileNavMenuLink-Styles"

const MobileNavMenuLink = ({activeNavItem, label, icon, handleCarouselItemChange, animDelay}) => {
  console.log(animDelay)
  return (
    <NavItemContainer onClick={()=>{handleCarouselItemChange(activeNavItem)}} animDelay={animDelay}>
      {icon()}
      <NavItemText>
        {label.toUpperCase()}
      </NavItemText>
    </NavItemContainer>
  );
}

export default MobileNavMenuLink;
