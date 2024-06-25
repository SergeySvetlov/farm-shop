import React from "react";
import Container from "../../layout/container/container";
import Title, { titleSize } from "../../ui/title/title";
import { StyledIntro } from "./styled.js";

export default function Intro () {
    return (
        <StyledIntro>
            <Container className="intro__container">
                <Title size={titleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
                <p>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
            </Container>
        </StyledIntro>
    )
}