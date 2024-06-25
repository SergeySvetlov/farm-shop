import React from "react";
import Container from "../../layout/container/container";
import Logo from "../../ui/logo/logo"
import Nav from "../nav/nav";
import { StyledHeader } from "./styled.js";

export default function Header () {
    return (
    <StyledHeader className="header">
        <Container className="header__container">
            <Logo/>
            <Nav/>            
        </Container>
    </StyledHeader>
    );
}