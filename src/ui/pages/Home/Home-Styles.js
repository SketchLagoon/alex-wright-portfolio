import Styled, {keyframes} from "styled-components";

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

    @media(max-width: 700px){
        height: 150vh;
        width: 200vh;
        top: -100vh;
    }
`;

export const Background = Styled.div`
    height: 100% !important;
    width: 100% !important;
    background-color: white;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
`;
