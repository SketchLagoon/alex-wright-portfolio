import Styled, { keyframes } from "styled-components";

const FadeInUp = keyframes`
0% {
  transform: translatey(10rem);
  opacity: 0;
}
100% {
  transform: translatey(0);
  opacity: 0.6;
}
`;

export const NavItemContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    color: #1a1b1e;
    height: 100%;
    width: 25%;
    opacity: 0.6;
    transition: 0.5s;
    transform: translatey(10rem);
    animation: ${FadeInUp} 2s ease-in-out forwards;
    animation-delay: ${props=>(props.animDelay? props.animDelay + "s"  : 0)};

    svg {
        transform: scale(1.2)
    }

    p {
        position: relative;
        bottom:-0.5rem;
        visibility: hidden;
    }

    &:hover {
        /* border-bottom: 14px solid #86A8E7; */
        color: #86A8E7;
        opacity: 1;
        transform: scale(1.1);
        margin-top: -1rem;
    }

    &:hover p {
        visibility: visible;
        text-align: center;
        font-weight: 500;
        color: #86A8E7;
    } 
`

export const NavItemText = Styled.p`
        transition: 0.3s;
        font-size: 0.25rem;
`


