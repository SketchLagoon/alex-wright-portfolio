import React from 'react';

import DesktopArtwork from "../../organisms/DesktopArtwork/DesktopArtwork"
import Logo from "../../molecules/Logo/Logo"

import { ContentBox } from "../Template-Styles"

import { 
        SummaryDisplayBlob,
        BioSummary,
        BioName
        } from "./About-Styles"

const About = ({name, roles, bio, active}) =>{
  return (
      <>
        <ContentBox active={active}>
          <Logo name={name} roles={roles}/>
          <BioSummary>I'm <BioName>{name}</BioName>, {bio}</BioSummary>

          {
            window.innerWidth < 700 ? 
            <DesktopArtwork active={active}/> :
            <></>
          }

          <SummaryDisplayBlob/>
        </ContentBox>

        {
          window.innerWidth < 700 ? 
          <></> : 
          <DesktopArtwork active={active}/>
        }

      </>
  );
}

export default About;
