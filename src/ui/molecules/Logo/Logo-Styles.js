import Styled from "styled-components";

import { ReactComponent as AlexWright} from "./NameLogo.svg"

export const LogoContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0 4rem 6rem;
    width: 100%;

    @media(max-width: 1366px){
    }
    @media(max-width: 700px){
        padding: 2rem 0 0rem 0rem;
        /* display: none; */
    }

`

export const LogoSVG = Styled(AlexWright)`
    height: 20rem;
    width: 43.75rem;

    @media(max-width: 1366px){
        height: 12rem;
        width: 26rem;
    }
    @media(max-width: 700px){
        height: 6rem;
        width: 13rem;
    }
`

export const LogoRoleContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

export const LogoRoleText = Styled.p`
    font-size: 2.33rem;
    font-weight: 400;
    padding-left: 1rem;
    color: #1a1b1e80;

    @media(max-width: 1366px){
        font-size: 1.5rem;
    }
    @media(max-width: 700px){
        font-size: 0.75em;
        padding-left: 0rem;
    }
`

