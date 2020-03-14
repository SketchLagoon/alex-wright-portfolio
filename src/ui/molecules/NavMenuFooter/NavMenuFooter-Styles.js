import Styled from "styled-components";

export const NavMenuFooterContainer = Styled.div`
    position: absolute;
    border-radius: 0 10px 0 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
    display: flex;
`

export const NavMenuFooterButton = Styled.a`
    width: 50%;
    height: 4rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    transition: 0.6s;

    &:hover{
        /* background-color: #91EAE4; */
        /* background-color: #7F7FD5; */
        background-color: #86A8E7;
    }
    &:hover > span {
        color: white;
    }
`

export const NavMenuFooterButtonLabel = Styled.span`
    /* changes color of icon as well */
    color: #1a1b1e80;
    transition: 0.6s;
    transform: scale(1.5)
`
