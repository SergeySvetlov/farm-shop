import React from "react";
import { StyledButton } from "./styled.js";

export default function Button ({minWidth, className, children, link, onClick, ...props}) {

    return <StyledButton onClick = {onClick} style={{ minWidth: minWidth }} className={className} {...( link ? {to: link} : {as: 'button', type: 'button'})} {...props}>{children}</StyledButton>
}