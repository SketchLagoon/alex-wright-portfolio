import React from 'react';

import DesktopArtwork from "../../organisms/DesktopArtwork/DesktopArtwork"
import Logo from "../../molecules/Logo/Logo"

import { ContentBox } from "../Template-Styles"

import { 
        SummaryDisplayBlob,
        BioSummary,
        BioName
        } from "./About-Styles"

const About = ({name, roles, bio}) =>{
  return (
      <>
        <ContentBox>
          <Logo name={name} roles={roles}/>
          <BioSummary>I'm <BioName>{name}</BioName>, {bio}</BioSummary>
          <SummaryDisplayBlob/>
        </ContentBox>
        <DesktopArtwork/>
      </>
  );
}

export default About;
