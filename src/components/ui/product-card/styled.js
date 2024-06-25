import styled from "styled-components";

export const StyledCard = styled.div`
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colorTextWhite};
    width: 100%;
    max-width: 727px;
    height: 288px;
    padding: 20px;
    display: grid;
    grid-template-columns: 248px auto;
    column-gap: 20px;
`;

export const StyledImg = styled.img`
    width: 100%;
    //height: 248px;
    object-fit: contain;
`;

export const CardContent = styled.div`
    overflow: auto;
`;

export const Description = styled.div`
    font-size: 14px;
    line-height: 21px;
    margin: 0 0 12px 0;
`;

export const Price = styled.span`
    display: block;
    background-color: ${(props) => props.theme.colorBackgroundSection};
    padding: 4px 8px 4px 8px;
    width: max-content;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
`;
    
export const Specification = styled.span`
    display: block;
    margin: 0 0 8px 0;
    font-size: 14px;
    line-height: 21px;
`;