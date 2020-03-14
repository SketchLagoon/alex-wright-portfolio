import Styled from "styled-components";

import { ReactComponent as AlexWright} from "./NameLogo.svg"

export const LogoContainer = Styled.div`
    display: flex;
    align-items: center;
    padding: 7rem 4rem;
    width: 45rem;

    @media(max-width: 1366px){
    }

`

export const LogoSVG = Styled(AlexWright)`
    height: 15rem;
    width: 35rem;
`

export const LogoRoleContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const LogoRoleText = Styled.h1`
    font-size: 1.75rem;
    font-weight: 400;
    padding-left: 1rem;
    color: #1a1b1e80;
`

