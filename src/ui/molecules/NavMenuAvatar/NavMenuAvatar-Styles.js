import Styled from "styled-components";

import { ReactComponent as AlexWright} from "./NameLogo.svg"

export const NavMenuAvatarContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    margin: 3rem 0 14rem -1rem;

    @media(max-width: 1366px){
        margin: 3rem 0 7rem -1rem;
    }

`

export const NavMenuLogo = Styled(AlexWright)`
    height: 5rem;
    width: 30%;
`

export const NavMenuRoleContainer = Styled.div`
    display: flex;
    flex-direction: column;
`

export const NavMenuRoleText = Styled.h1`
    font-size: 0.75rem;
    font-weight: 400;
    color: #1a1b1e99;
`

