import React, {useRef} from "react";
import { SwiperSlide } from "swiper/react"; 
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from "../../ui/title/title.jsx";
import ProductCard from "../../ui/product-card/product-card.jsx";
import {SlyderSection, SliderWrapper, StyledSlider } from "./styled.js";

SwiperCore.use([Pagination, Mousewheel, Scrollbar]);

export default function ProductsSlyder ({products, onSwiper}) {
    return (
        <SlyderSection>
            <Title hide level="2" size="small">Слайдер с товарами</Title>
            <SliderWrapper>
                <StyledSlider
                    onSwiper={onSwiper}
                    direction="vertical"
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={12}
                    slidesPerView={2.5}
                    loop={true}
                    scrollbar={{ draggable: true }}
                    mousewheel
                    pagination={{
                      type: "fanction"
                    }}
                >
                    {products.map((product) => 
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product}/>
                    </SwiperSlide>
                    )}
                </StyledSlider>            
            </SliderWrapper>
 
        </SlyderSection>
    )
}