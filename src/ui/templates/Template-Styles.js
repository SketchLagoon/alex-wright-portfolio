import Styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
	0% {
        transform: translate(120%,0);
        /* opacity: 0; */
	}
	100% {
        transform: translate(-0,0);
        /* opacity: 1; */
	}
`;

export const ContentBox = Styled.div`

    /* display: none; */

    width: 80vw;
    height: 80vh;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 10vh;
    left: 10vw;
    z-index: 3;
    filter: drop-shadow(0 0 1rem rgba(0,0,0,0.2));
    overflow: hidden;
    transform: translate(120%,0);
    animation: ${fadeInLeft} 1.5s ease-in-out forwards;
    animation-delay: 1.5s;

`;
