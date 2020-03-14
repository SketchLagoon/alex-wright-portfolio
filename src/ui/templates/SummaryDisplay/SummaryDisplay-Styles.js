import Styled from "styled-components";
import { ReactComponent as Blob } from "./blob.svg";

// CODE FOR A SMALL BUBBLE THAT WILL NEED TO BE ANIMATED 
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

export const Background = Styled.div`
    height: 100vh !important;
    width: 100vw !important;
    background-color: white;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
`;

export const Circle = Styled.span`
    height: 200vh;
    width: 300vh;
    background: radial-gradient(#91EAE4, #7F7FD5);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: -125vh;
    border: 10px solid #86A8E7;
    z-index: 1;
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
`;