import React from "react";
import { StyledTitle } from "./styled.js";

export const titleSize = {
    BIG: 'big',
    SMALL: 'small',
    EXTRASMALL: 'extraslmall'
}

export default function Title ({children, size, level, ...props}) {
    return <StyledTitle {...props} {...(level ? {as: `h${level}`} : "")} size={size}>{children}</StyledTitle>
}