import styled from "styled-components";

export const StyledCopyright = styled.span`
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeight};
    word-wrap: break-word;
    width: 100%;
    max-width: 122px;
    color: ${(props) => props.theme.colorTextBlack};
`;