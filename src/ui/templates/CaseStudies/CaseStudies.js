import React from 'react';

import { ContentBox, ComingSoonWrapper, ComingSoon } from "../Template-Styles"


const CaseStudies = ({active}) =>{
  return (
      <>
        <ContentBox active={active}>
            <ComingSoonWrapper>
                <ComingSoon>Case Studies Coming Soon</ComingSoon>
            </ComingSoonWrapper>
        </ContentBox>
      </>
  );
}

export default CaseStudies;
