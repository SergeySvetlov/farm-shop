import React from "react";
import logo from "../../../assets/logo.svg";
import { AppRoute} from "../../../const.js";
import { StyledLogo } from "./styled.js";

export default function Logo () {
    return (
        <StyledLogo className="logo__link" to={AppRoute.MAIN}>
            <img src={logo} alt="лого"/>
            <span className="logo__text">Фермерские продукты</span>
        </StyledLogo>
    )
}