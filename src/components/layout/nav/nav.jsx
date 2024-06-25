import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const.js";
import { StyledButton } from "./styled.js";
import { useLocation } from "react-router-dom";


const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button key={AppRoute.BUY} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];


export default function Nav () {
    const pageUrl = useLocation().pathname; 
    return (
        <nav>
            {buttons.filter((button) => button.to !== pageUrl).map((button) => button.button)}
        </nav>
    );
} 