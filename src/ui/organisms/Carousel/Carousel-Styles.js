import Styled, { keyframes }  from "styled-components"
const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1
}
`;

export const CarouselWrapper = Styled.div`
  height: 100vh !important;
  min-width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  animation: ${fadeIn} 2s ease-in-out forwards;
`;