import styled from "styled-components";
import { A } from "../../elements/index";

export const StyledButton = styled(A)`
    min-width: 260px;
    border: none;
    background-color: ${(props) => props.theme.colorButton};
    color: ${(props) => props.theme.colorTextWhite};
    align-content: center;
    padding: 16.5px;
    word-wrap: break-word;
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeight};
    text-decoration: none;
    display: block;

    &:hover, 
    &:active {
        background-color: ${(props) => props.theme.colorButtonHover};
        box-shadow: inset 0 1px 3px #000000;
    }
    &:active {
    box-shadow: none;
    }

    &:disabled {
        opacity: 0.5;
        box-shadow: none;
        background-color: ${(props) => props.theme.colorButton};
    }
`;