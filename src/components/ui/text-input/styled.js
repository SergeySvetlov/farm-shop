import styled from "styled-components";

export const StyledInput = styled.input`
    display: flex;
    height: 48px;
    width: 100%;
    background-color: ${(props) => props.theme.colorBackgroundGrey};
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;

    ::placeholder {
        color: ${(props) => props.theme.colorTextBlack};
    }
`;