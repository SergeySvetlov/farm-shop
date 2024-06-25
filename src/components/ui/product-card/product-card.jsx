import React from "react";
import Title from "../../ui/title/title.jsx";
import Tabs from "../../ui/tabs/tabs.jsx";
import { StyledCard, StyledImg, CardContent, Description, Price, Specification } from "./styled.js";

function tabs(product) { return [
    {
        title: "Описание",
        description: <><Description>{product.description}</Description> <Price>{product.price} руб. / {product.weight} гр.</Price></>
    },
    {
        title: "Характеристики",
        description: product.specifications.map((item) => <Specification><b>{item.property}:</b> {item.value}</Specification> )
    },
    {
        title: "Свойства",
        description: product.structure.map((item) => <Specification><b>{item.property}:</b> {item.value}</Specification> )
        },
]};

export default function ProductCard ({product}) {

    return (
        <StyledCard>
            <StyledImg src={product.image}/>
            <CardContent>
                <Title level="3" size="medium" margin={"0 0 10px 0"}>{product.name}</Title>
                <Tabs tabs={tabs(product)}/>                
            </CardContent>

        </StyledCard>
    )
}