import React from "react";

import WhiteLogo from "./AlexWright-Square-Logo.png"

import {
    MobileWhiteLogoContainer,
    MobileWhiteLogoImage
} from "./MobileWhiteLogo-Styles";

const MobileWhiteLogo = () => {

  return (
    <MobileWhiteLogoContainer>
        <MobileWhiteLogoImage src={WhiteLogo}/>
    </MobileWhiteLogoContainer>
  );
};

export default MobileWhiteLogo;
