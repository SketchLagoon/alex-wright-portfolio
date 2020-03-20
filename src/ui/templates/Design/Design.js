import React from 'react';

import { ContentBox, ComingSoonWrapper, ComingSoon } from "../Template-Styles"


const Design = ({active}) =>{
  return (
      <>
        <ContentBox active={active}>
          <ComingSoonWrapper>
                <ComingSoon>Design Portfolio Coming Soon</ComingSoon>
            </ComingSoonWrapper>
        </ContentBox>
      </>
  );
}

export default Design;
