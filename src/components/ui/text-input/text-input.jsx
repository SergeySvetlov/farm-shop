import React from "react";
import { StyledInput } from "./styled.js";

export default function TextInput({className, ...props}) {
    return <StyledInput type="text" className={className} {...props}/>
};