import React from 'react';

import { LogoContainer, LogoSVG, LogoRoleContainer, LogoRoleText } from "./Logo-Styles"

const NavMenuAvatar = ({name, roles}) => {
  return (
    <LogoContainer>
        <LogoSVG/>
        <LogoRoleContainer>
        {roles && roles.map(role=>(<LogoRoleText key={role}>{role.toUpperCase()}</LogoRoleText>))}
        </LogoRoleContainer>
    </LogoContainer>
  );
}

export default NavMenuAvatar;
