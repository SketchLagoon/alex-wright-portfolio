import Styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1
}
`;

export const MobileWhiteLogoContainer = Styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
`

export const MobileWhiteLogoImage = Styled.img`
    margin-left: 30px;
    height: 3rem;
    width: auto;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 2s;
`