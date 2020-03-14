import Styled, { keyframes } from "styled-components";
import { ReactComponent as MyMenuIcon } from "./MyMenuIcon-White.svg";


// KEYFRAMES
export const fadeIn = keyframes`
  from {
       backdrop-filter: blur(0px);
  }

  to {
       backdrop-filter: blur(5px);
  }
`;

export const fadeOut = keyframes`
  from {
       backdrop-filter: blur(5px);
  }

  to {
       backdrop-filter: blur(0px);
  }
`;

//STYLES
export const NavMenuContainer = Styled.div`
  height: 100vh; 
  width: 20vw; 
  position: fixed; 
  top: 0;
  left: 0;
  background-color: white !important; 
  overflow-x: hidden;
  /* position: relative; */
  filter: drop-shadow(0 0 1rem rgba(0,0,0,0.2));
  border-radius: 0 10px 10px 0;

  @media (max-width: 1366px){
      width: 25vw;
  }
`;

export const NavMenuButton = Styled(MyMenuIcon)`
    height: 30px;
    width: 30px;
    color: white;
    transform: scaleX(-1);
    transition: 0.3s;

    &:hover{
        cursor: pointer;
        transform: scale(-1.2,1.2)
    }

    @media(max-width: 1366px){
       height: 20px;
       width: 20px;
    }
    
    > * {
      fill: white !important;
    }
`;


export const NavMenuControls = Styled.div`
    position:absolute;
    width: 10vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`;

export const NavMenuDeadSpace = Styled.div`
    width: 100vw;
    height: 100vw;
    position: relative;
    z-index: -1; 
    animation: ${props => props.open ? fadeIn : fadeOut } ${props => props.open ? "0.5s" : "0.2s"} ease-in-out forwards;
    ${props => props.open ? "animation-delay: 0.5s" : ""};
`

export const NavMenuWrapper = Styled.div`
    width: 100vw;
    height: 100vw;
    position: absolute;
    transition: 0.75s;
    z-index: 12; 
`
