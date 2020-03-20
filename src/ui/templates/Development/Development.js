import React from 'react';

import { ContentBox, ComingSoonWrapper, ComingSoon } from "../Template-Styles"


const Development = ({active}) =>{
  return (
      <>
        <ContentBox active={active}>
            <ComingSoonWrapper>
                <ComingSoon>Dev Portfolio Coming Soon</ComingSoon>
            </ComingSoonWrapper>
        </ContentBox>
      </>
  );
}

export default Development;
