import React from 'react';

import { NavMenuFooterContainer, NavMenuFooterButton, NavMenuFooterButtonLabel } from "./NavMenuFooter-Styles"

const NavMenuFooter = ({links}) => {
  return (
    <NavMenuFooterContainer>
        {links && links.map((link,i)=>(
            <NavMenuFooterButton key={i} target="_blank" href={link.url}>
                <NavMenuFooterButtonLabel>
                    {link.icon()}
                </NavMenuFooterButtonLabel>
            </NavMenuFooterButton>
        ))}
    </NavMenuFooterContainer>
  );
}

export default NavMenuFooter;
