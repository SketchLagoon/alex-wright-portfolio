import React from 'react';

import DesktopArtwork from "../../organisms/DesktopArtwork/DesktopArtwork"
import Logo from "../../molecules/Logo/Logo"

import { 
        Background, 
        Circle,
        ContentBox,
        SummaryDisplayBlob
        } from "./SummaryDisplay-Styles"

const SummaryDisplay = ({name, roles}) =>{
  return (
    <Background>
        <Circle/>
        <ContentBox>
          <Logo name={name} roles={roles}/>
          <SummaryDisplayBlob/>
        </ContentBox>
        <DesktopArtwork/>
    </Background>
  );
}

export default SummaryDisplay;
