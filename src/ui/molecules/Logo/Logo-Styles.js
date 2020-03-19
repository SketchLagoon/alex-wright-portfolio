import Styled from "styled-components";

import { ReactComponent as AlexWright} from "./NameLogo.svg"

export const LogoContainer = Styled.div`
    display: flex;
    align-items: center;
    padding: 4rem 0 4rem 6rem;
    width: 60rem;

    @media(max-width: 1366px){
    }

`

export const LogoSVG = Styled(AlexWright)`
    height: 20rem;
    width: 43.75rem;

    @media(max-width: 1366px){
        height: 12rem;
        width: 26rem;
    }
`

export const LogoRoleContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const LogoRoleText = Styled.h1`
    font-size: 2.33rem;
    font-weight: 400;
    padding-left: 1rem;
    color: #1a1b1e80;

    @media(max-width: 1366px){
        font-size: 1.5rem;
    }
`

