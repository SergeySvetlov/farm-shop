import styled from "styled-components";

export const StyledAdvantageCard = styled.section`
    box-sizing: border-box;
    width: 100%;
    background-color: ${(props) => {
        if (props.status === "good") {
            return props.theme.colorBackgroundGood
        } else if (props.status === "bad") {
            return props.theme.colorBackgroundBad
        }
    }};
    max-width: 540px;
    min-height: 193px;
    padding: ${(props) => props.theme.indent};
    margin: 0 auto;
    display: grid;
    grid-template-areas: "img option" "img title" "text text";
    grid-template-columns: 52px auto;
    grid-template-rows: min-content min-content auto;
    column-gap: ${(props) => props.theme.indent};

    & img {
        grid-area: img;
    }

    & span {
        grid-area: option;
        text-align: left;
        display: block;
        margin: 0 0 4px 0;
        width: 100%;
        max-width: 158px;
        background-color: ${(props) => {
            if (props.status === "good") {
                return props.theme.colorIconGood
            } else if (props.status === "bad") {
                return props.theme.colorIconBad
            }
        }};
        color: ${(props) => props.theme.colorTextWhite};;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
    }
       
    & h3 {
        grid-area: title;
        text-align: left;
        margin: 0 0 ${(props) => props.theme.indent} 0;
        font-weight: 700;
        font-size: ${(props) => props.theme.fontSizeDefault};
        line-height: ${(props) => props.theme.lineHeight};
    }

    & p {
        grid-area: text;
        text-align: left;
        margin: 0;
        font-weight: 400;
        font-size: ${(props) => props.theme.fontSizeDefault};
        line-height: ${(props) => props.theme.lineHeight};
    }
`;