import React from "react";
import {StyledInput} from "./styled.js";

export default function Checkbox({name, value, isChecked, labelComponent, text, onClick, onChange, ...props}) {

    const LabelComponent = labelComponent;
    return (
        <label>
            <StyledInput hide type="checkbox" name={name} value={value} checked={isChecked} onChange={() => onChange(value)} {...props}/>
            <LabelComponent onClick={() => onClick(value)} isChecked={isChecked}>{text}</LabelComponent>
        </label>
    )
}