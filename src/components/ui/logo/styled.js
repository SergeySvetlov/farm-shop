import styled from "styled-components";
import { A } from "../../elements/index";

export const StyledLogo = styled(A)`
    display: flex;
    align-self: center;
    text-decoration: none;
    color: ${(props) => props.theme.colorTextBlack};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 28px;
    font-weight: 700;
    line-height: ${(props) => props.theme.lineHeight};

    & img {
        display: block;
        height: 44px;
    }

    .logo__text {
        display: block;
        padding: 0 0 0 30px;
        width: 100%;
        max-width: 330px;
        word-wrap: break-word;
    }
`;
