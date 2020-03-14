import React from 'react';

import { NavMenuAvatarContainer, NavMenuLogo, NavMenuRoleContainer, NavMenuRoleText } from "./NavMenuAvatar-Styles"

const NavMenuAvatar = ({roles}) => {
  return (
    <NavMenuAvatarContainer>
        <NavMenuLogo/>
        <NavMenuRoleContainer>
        {roles && roles.map(role=>(<NavMenuRoleText key={role}>{role.toUpperCase()}</NavMenuRoleText>))}
        </NavMenuRoleContainer>
    </NavMenuAvatarContainer>
  );
}

export default NavMenuAvatar;
