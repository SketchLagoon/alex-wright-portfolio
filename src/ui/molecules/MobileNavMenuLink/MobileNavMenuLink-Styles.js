import Styled from "styled-components";

export const NavItemContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* overflow-y: hidden; */
    color: #1a1b1e;
    height: 100%;
    width: 25%;
    opacity: 0.6;
    transition: 0.5s;

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
        transform: scale(1.1)
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


