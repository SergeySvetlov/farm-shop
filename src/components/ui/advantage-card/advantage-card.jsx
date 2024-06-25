import React from "react";
import Title from "../../ui/title/title";
import { StyledAdvantageCard } from "./styled.js";

export default function AdvantageCard ({advantage}) {
    return (
        <StyledAdvantageCard status={advantage.status}>
            <img src={advantage.img} alt="картинка"/>
            <span status={advantage.status}>{advantage.option}</span>
            <Title level={3} size="small">{advantage.title}</Title>
            <p>{advantage.text}</p>
        </StyledAdvantageCard>        
    )
} 