import React, {useState} from "react";
import OrderForm from "../../blocks/order-form/order-form";
import ProductsSlyder from "../../blocks/products-slyder/products-slyder";
import {StyledMain, StyledContainer} from "./styled.js";

export default function OrderPage ({products}) {
    const [swiperRef, setSwiperRef] = useState(null);
    return products && products.length ? (
        <StyledMain>
            <StyledContainer>
                <OrderForm products={products} swiperRef={swiperRef}/>
                <ProductsSlyder products={products} onSwiper={setSwiperRef}/>
            </StyledContainer>
        </StyledMain>
    ) : (<StyledContainer>Продукты были слишком вкусные и их разобрали.</StyledContainer>);
}