import React from 'react';

import DesktopArtwork from "../../organisms/DesktopArtwork/DesktopArtwork"

import { 
        Background, 
        Circle,
        ContentBox,
        SummaryDisplayBlob
        } from "./SummaryDisplay-Styles"

const SummaryDisplay = () =>{
  return (
    <Background>
        <Circle/>
        <ContentBox>
          <SummaryDisplayBlob/>
        </ContentBox>
        <DesktopArtwork/>
    </Background>
  );
}

export default SummaryDisplay;
