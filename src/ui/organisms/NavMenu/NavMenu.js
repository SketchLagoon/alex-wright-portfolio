import React, { useState } from "react";

import NavMenuNavigation from "../../molecules/NavMenuNavigation/NavMenuNavigation";
import NavMenuAvatar from "../../molecules/NavMenuAvatar/NavMenuAvatar";
import NavMenuFooter from "../../molecules/NavMenuFooter/NavMenuFooter"

import {
  NavMenuContainer,
  NavMenuButton,
  NavMenuControls,
  NavMenuWrapper,
  NavMenuDeadSpace
} from "./NavMenu-Styles";

const NavMenu = ({ User, handleCarouselItemChange }) => {
  const [open, setOpen] = useState(false);
  //CHANGE THIS BACK AFTER YOU ARE DONE EDITING THE MENU
  // const [open, setOpen] = useState(true);


  const closeClickCatch = () => {
    open ? setOpen(false) : console.log("nav already closed");
  };

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  
  return (
    <>
      <NavMenuControls>
        <NavMenuButton onClick={toggleOpen} />
      </NavMenuControls>

      {!open ? (
        <NavMenuWrapper
          style={{ transform: "translate3d(-100%,0,0)", transition: "1.5s" }}
        >
          <NavMenuContainer>
            <NavMenuAvatar roles={User.roles}/>
            <NavMenuNavigation navLinks={User.navLinks} icons={User.icons} handleCarouselItemChange={handleCarouselItemChange} toggleOpen={toggleOpen}/>
            <NavMenuFooter links={User.links}/>
          </NavMenuContainer>
          <NavMenuDeadSpace open={false} />
        </NavMenuWrapper>
      ) : (
        <NavMenuWrapper style={{ transform: "translate3d(0,0,0)" }}>
          <NavMenuContainer>
            <NavMenuAvatar roles={User.roles}/>
            <NavMenuNavigation navLinks={User.navLinks} icons={User.icons}  handleCarouselItemChange={handleCarouselItemChange} toggleOpen={toggleOpen}/>
            <NavMenuFooter links={User.links}/>
          </NavMenuContainer>
          <NavMenuDeadSpace onClick={closeClickCatch} open={true} />
        </NavMenuWrapper>
      )}
    </>
  );
};

export default NavMenu;
