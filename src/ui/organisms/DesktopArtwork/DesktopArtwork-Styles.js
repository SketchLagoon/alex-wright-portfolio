import Styled, { keyframes, css } from "styled-components";

// import { ReactComponent as Asset1 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset2 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset3 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset4 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset5 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset6 } from "./SVGAssets/Asset1.svg";
// import { ReactComponent as Asset7 } from "./SVGAssets/Asset1.svg";

//Example for importing SVGs instead of PNGs
// export const ArtAsset1 = Styled(Asset1)`
// `;

//KEYFRAMES 

//4k

//1440p

//1080p
const floatDown = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-7px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const floatUp = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(7px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const slideInUp = keyframes`
	0% {
        transform:  scale(1) translate(0,100%);
	}
	100% {
        transform:  scale(1) translate(0,0);
	}
`;

const slideOutDown = keyframes`
	0% {
		transform:  scale(1) translate(0,0);
	}
	100% {
		transform:  scale(1) translate(0,100%);
	}
`;

//720p

const slideInUpSmallDesktop = keyframes`
	0% {
		transform: scale(0.7) translate(0,100%) translate3d(15%,20%,0);
	}
	100% {
		transform: scale(0.7) translate(0,0) translate3d(15%,20%,0);
	}
`;

const slideOutDownSmallDesktop = keyframes`
	0% {
		transform: scale(0.7) translate(0,0) translate3d(15%,20%,0);
	}
	100% {
		transform: scale(0.7) translate(0,100%) translate3d(15%,20%,0);
	}
`;

//MOBILE

const slideInUpSmallMobile = keyframes`
	0% {
		transform: scale(0.5) translate(0,100%) translate3d(38%,40%,0);
	}
	100% {
		transform: scale(0.5) translate(0,0) translate3d(38%,40%,0);
	}
`;

const slideOutDownSmallMobile = keyframes`
	0% {
		transform: scale(0.5) translate(0,0) translate3d(38%,40%,0);
	}
	100% {
		transform: scale(0.5) translate(0,100%) translate3d(38%,40%,0);
	}
`;

//DOUBLE INTERPOLATED ANIMATIONS

const SlideInUpAnim = css`
	animation: ${slideInUp} 1.5s ease-in-out forwards;
	animation-delay: 1.5s;
	@media(max-width: 1366px){
		animation: ${slideInUpSmallDesktop} 1.5s ease-in-out forwards;
		animation-delay: 1.5s;
	}
	@media(max-width: 700px){
		animation: ${slideInUpSmallMobile} 1.5s ease-in-out forwards;
		animation-delay: 1.5s;
	}
`

const SlideOutDownAnim = css`
	animation: ${slideOutDown} 1.5s ease-in-out forwards;
	@media(max-width: 1366px){
		animation: ${slideOutDownSmallDesktop} 1.5s ease-in-out forwards;
	}
	@media(max-width: 700px){
		animation: ${slideOutDownSmallMobile} 1.5s ease-in-out forwards;
	}
`

//STYLES

export const DesktopArtworkContainer = Styled.div`
    position: absolute;
    z-index: 3;
    bottom: -3rem;
    right: -13rem;
    display: flex;
    flex-direction: row;
	transform: translate(0,100%);
	
	${props => (props.active === "yes" ? SlideInUpAnim : SlideOutDownAnim)}
`;

export const ArtAsset = Styled.img`
  filter: drop-shadow(0 0 1rem rgba(0,0,0,0.15));
  position: relative;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)};
  align-self: center;
  right: ${props=>(props.xOffset ? props.xOffset : 0)};
  top: ${props=>(props.yOffset ? props.yOffset : 0)};
  animation: ${props => props.direction === "up" ? floatUp : floatDown } 4s ease-in-out infinite;
  animation-delay: ${props=>(props.animDelay ? props.animDelay : 0)};
`;
