import React from "react";
import {StyledInput} from "./styled.js";


export default function PriceInput({className, value}) {
    return (
        <StyledInput type="text" className={className} value={`${value} руб.`}/>
    )
};