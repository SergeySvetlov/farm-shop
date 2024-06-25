import styled from "styled-components";

export const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    color: ${(props) => props.theme.colorTextBlack};

    &:focus {
        outline: none;
    }
`;