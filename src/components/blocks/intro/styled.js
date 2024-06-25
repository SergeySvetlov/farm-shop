import styled from "styled-components";
import farmer from "../../../assets/farmer.svg";
import ellipse from "../../../assets/ellipse.svg";

export const StyledIntro = styled.section`
    background-color: ${(props) => props.theme.colorBackgroundSection};
    padding: 183px 0 183px 0; 
    background-image: url(${farmer}), url(${ellipse});
    background-repeat: no-repeat;
    background-position: 60% 50px, 61% 90px;
    
    & h1 {
        margin: 0 0 24px 0;
        max-width: 637px;
    }
    
    & p {
        width: 100%;
        max-width: 538px;
        text-align: left;
        word-wrap: break-word;
        font-weight: 400;
        font-size: ${(props) => props.theme.fontSizeDefault};
        line-height: ${(props) => props.theme.lineHeight};
        margin: 0;
    }   
`;