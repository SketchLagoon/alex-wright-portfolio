import React from 'react';

import NavMenuLink from '../../atoms/NavMenuLink/NavMenuLink'

import { NavigationContainer } from "./NavMenuNavigation-Styles"


const NavMenuLinks = ({navLinks, icons}) => {
  return (
    <NavigationContainer>
      {navLinks && navLinks.map( (link, i) => <NavMenuLink key={i} icon={icons[i]} label={link}/> )}
    </NavigationContainer>
  );
}

export default NavMenuLinks;
