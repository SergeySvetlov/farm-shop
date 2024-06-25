import styled, { css } from "styled-components";
import check from "../../../assets/check.svg";
import TextInput from "../../ui/text-input/text-input.jsx";
import PriceInput from "../../ui/price-input/price-input.jsx";
import Button from "../../ui/button/button.jsx";

export const FormSection = styled.section`
    width: 100%;
    max-width: 353px;
`;

export const StyledForm = styled.form`

`;

export const StyledFieldset = styled.fieldset`
    border: 1px solid ${(props) => props.theme.colorBackgroundGrey};
    background-color: ${(props) => props.theme.colorTextWhite};
    margin: 0;
    box-shadow: 0px 0px 1px 0px #0000000A, 0px 2px 6px 0px #0000000A, 0px 10px 20px 0px #0000000A;
    & h3 {
        margin: 0 0 12px 0;
    }
    ${(props) => props.submit ?
    css`
        padding: 24px 20px 20px 20px;
    ` :
    css`
        padding: 24px 20px 12px 20px;
        margin-bottom: 18px;
    `}
`;

export const StyledCheckbox = styled.span`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 15px 0 14px 0;

    &:after {    
        display: block;
        content: ""; 
        width: 24px;
        height: 24px;    
        ${(props) => props.isChecked ? 
        css` 
        background-color: ${ (props) => props.theme.colorButton};
        background-image: url(${check});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        ` : css` 
        background-color: ${ (props) => props.theme.colorBackgroundGrey};
        `};
        border: 1px solid #0000001A;
    }
`;

export const AdressInput = styled(TextInput)`
    margin-bottom: 20px;
`;

export const PriceLabel = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: 6px;
`;

export const PriceValue = styled(PriceInput)`
    margin-bottom: 32px;
`;

export const SubmitButton = styled(Button)`
    width: 100%;
`;