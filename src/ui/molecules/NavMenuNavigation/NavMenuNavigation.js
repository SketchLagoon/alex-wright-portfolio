import React from 'react';

import NavMenuLink from '../../atoms/NavMenuLink/NavMenuLink'

import { NavigationContainer } from "./NavMenuNavigation-Styles"


const NavMenuLinks = ({navLinks, icons, handleCarouselItemChange, toggleOpen}) => {
  return (
    <NavigationContainer>
      {navLinks && navLinks.map( (link, i) => <NavMenuLink key={i} activeNavItem={i} icon={icons[i]} label={link} handleCarouselItemChange={handleCarouselItemChange} toggleOpen={toggleOpen}/> )}
    </NavigationContainer>
  );
}

export default NavMenuLinks;
