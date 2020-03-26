import Styled, { keyframes } from "styled-components";
import { ReactComponent as Blob } from "./blob.svg";

// One small bubble, many will need to be dynamically generated and animated to fill the circlebg component
// const float = keyframes`
// 	0% {
// 		transform: translatey(0px);
// 	}
// 	50% {
// 		transform: translatey(-10px);
// 	}
// 	100% {
// 		transform: translatey(0px);
// 	}
// `;

// export const Bubble = Styled.span`
//     background-color: red;
//     border-radius: 50%;
//     border: 3px solid rgba(255,255,255,0.4);
//     height: 10px;
//     width: 10px;
//     display: inline-block;
//     position: absolute;
//     z-index: 10;
//     filter: drop-shadow(0 0 1rem rgba(0,0,0,0.2));
//     animation: ${float} ease-in-out infinite;
//     /* These will change depending on the bubble */
//     left: 24.5%;
//     bottom: 10%;
//     animation-duration: 5s;
// `;

const fadeInDown = keyframes`
	0% {
        transform: translate(-50%,-100%);
        opacity: 0;
	}
	100% {
        transform: translate(-50%,0);
        opacity: 1;
	}
`;

// const fadeInLeft = keyframes`
// 	0% {
//         transform: translate(120%,0);
//         /* opacity: 0; */
// 	}
// 	100% {
//         transform: translate(-0,0);
//         /* opacity: 1; */
// 	}
// `;

// export const ContentBox = Styled.div`

//     /* display: none; */

//     width: 80vw;
//     height: 80vh;
//     background-color: white;
//     border-radius: 15px;
//     position: absolute;
//     top: 10vh;
//     left: 10vw;
//     z-index: 3;
//     filter: drop-shadow(0 0 1rem rgba(0,0,0,0.2));
//     overflow: hidden;
//     transform: translate(120%,0);
//     animation: ${fadeInLeft} 1.5s ease-in-out forwards;
//     animation-delay: 1.5s;

// `;

export const Circle = Styled.span`
    height: 200vh;
    width: 300vh;
    background: radial-gradient(#91EAE4, #7F7FD5);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%,-100%);
    top: -125vh;
    border: 10px solid #86A8E7;
    opacity: 0;
    z-index: 1;
    animation: ${fadeInDown} 2.3s ease-in-out forwards;
`;

export const Background = Styled.div`
    height: 100vh !important;
    width: 100vw !important;
    background-color: white;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
`;

export const SummaryDisplayBlob = Styled(Blob)`
    height: 50rem;
    position: absolute;
    right: -5rem;
    bottom: -12rem;

    @media(max-width: 1366px){
        height: 35rem;
        right: -4rem;
    }

    @media(max-width: 700px){
        right: -0.4rem;
        bottom: -14rem;
    }
`;

export const BioSummary = Styled.p`
    padding-left: 6rem;
    width: 50%;
    color: #1a1b1e80;
    font-weight: 400; 
    font-size: 2.33rem;
    position: relative;
    z-index: 99;

    @media(max-width: 1366px){
        font-size: 1.75rem;
    }

    @media(max-width: 700px){
        padding: 2rem 2rem;
        width: calc(100% - 4rem);
        font-size: 1rem;
        /* padding-left: 0; */
        text-align: center;
        line-height: 1.3rem;
    }
    @media(max-width: 700px) and (display-mode: fullscreen){
        padding: 6rem 2rem;
    }

    @media(max-width: 376px){
        padding: 2rem 2rem;
        width: calc(100% - 4rem);
        font-size: 1rem;
        text-align: center;
        line-height: 1.3rem;
    }

    @media(max-width: 376px) and (max-height: 800px){
        padding: 2rem 2rem;
    }
`
export const BioName = Styled.span`
    display: inline;
    font-weight: 600;
    font-size: 3rem;
    color: #86A8E7;

    @media(max-width: 1366px){
        font-size: 2.25rem;
    }
    @media(max-width: 700px){
        font-size: 1.33rem;

    }
`