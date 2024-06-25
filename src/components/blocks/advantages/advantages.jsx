import React from "react";
import Container from "../../layout/container/container";
import Title from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import { AppRoute } from "../../../const.js";
import { StyledAdvantages, StyledList, AdvantagesButton } from "./styled.js";
import { Li } from "../../elements/index";

export default function Advantages ({advantages}) {
    return advantages && advantages.length ? (
        <StyledAdvantages>
            <Container className="advantages__container">
                <Title level={2}>Почему фермерские продукты лучше?</Title>
                <StyledList>
                    {advantages.map((advantage) => {
                       return (<Li key={advantage.id}>
                            <AdvantageCard advantage={advantage}/>
                       </Li>)
                    })}                   
                </StyledList>
                <AdvantagesButton link={AppRoute.ORDER}> Купить</AdvantagesButton>
            </Container>
        </StyledAdvantages>
    ) : null;    
} 