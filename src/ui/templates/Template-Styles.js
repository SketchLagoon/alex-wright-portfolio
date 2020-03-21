import Styled, { keyframes, css } from "styled-components";

const fadeInLeft = keyframes`
0% {
  transform: translatex(110vw);
  opacity: 0;
}
100% {
  transform: translatex(10vw);
  opacity: 1
}
`;

const fadeOutLeft = keyframes`
0% {
  transform: translatex(10vw);
  opacity: 1
}
100% {
  transform: translatex(-110vw);
  opacity: 0;
}
`;

const inAnimation = css`
  animation: ${fadeInLeft} 2s ease-in-out forwards;
  /* research how to trigger on initial load only */
  /* animation-delay: 1.5s; */
`;

const outAnimation = css`
  animation: ${fadeOutLeft} 1s ease-in-out forwards;
`;

export const ContentBox = Styled.div`

    /* display: none; */

    width: 80vw;
    height: 80vh;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 10vh;
    left: 0vw;
    z-index: 2;
    filter: drop-shadow(0 0 1rem rgba(0,0,0,0.2));
    overflow: hidden;
    transform: translatex(10vw);
  
    ${props => (props.active === "yes" ? inAnimation : outAnimation)}

    @media(max-width: 700px) {
      height: 85vh;
      width: 90vw;
      top: 2.5vh;
      left: -5vw;
    }
`;

export const ComingSoonWrapper = Styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ComingSoon = Styled.h1`
  font-size: 4rem;
  color: #86A8E7;;
  font-weight: 600;
`