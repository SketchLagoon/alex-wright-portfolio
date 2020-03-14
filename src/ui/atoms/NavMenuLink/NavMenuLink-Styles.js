import Styled from "styled-components";

export const NavItemContainer = Styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: 0.3s;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
        border-left: 5px solid #86A8E7;
        margin-left: 5%;
        color: #86A8E7;
        opacity: 1;
        transform: scale(1.1)
    }
    &:hover p {
        font-weight: 600;
        color: #86A8E7;
    } 

    & > svg {
        margin-left: 3rem;
    }

  
`

export const NavItemText = Styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #1a1b1e;
    margin-left: 1.25rem;
    transition: 0.3s;
`