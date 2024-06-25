import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Button } from "../../elements/index";


export const SlyderSection = styled.section`
    padding: 0 0 0 20px;
    width: 100%;
`;

export const SliderWrapper = styled.div`
    position: relative;
    //max-width: 727px;
    margin: 0 auto;
    z-index: 3;
`;

export const StyledSlider = styled(Swiper)`
    width: 727px;
    height: 728px;
    margin: 0 auto 0 auto;
`;