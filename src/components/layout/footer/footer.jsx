import React from "react";
import Logo from "../../ui/logo/logo";
import Container from "../../layout/container/container";
import Copyright from "../../ui/copyright/copyright";
import { StyledFooter } from "./styled.js";

export default function Footer () {
    return (
    <StyledFooter className="footer">
        <Container className="footer__container">
            <Logo/>
            <Copyright/>            
        </Container>
    </StyledFooter>
    );
}