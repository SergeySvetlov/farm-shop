import styled from "styled-components";
import { H1 } from "../../elements/index";
import visuallyHidden from "../../../util/visually-hidden";

export const StyledTitle = styled(H1)`
    word-wrap: break-word;
    text-align: start;
    font-size: ${(props) => {
        if (props.size) {
            if (props.size === "big") {
                    return "44px";
            } else if (props.size === "medium") {
                    return "24px";
            } else if (props.size === "small") {
                    return props.theme.fontSizeDefault;
            } else if (props.size === "extrasmall") {
                    return "14px";
            };
        } return "36px";
    }};
    font-weight: ${(props) => {
        if (props.size) {
            if (props.size === "extrasmall") {
                 return 400; 
            }; 
            return 700; 
        } return 700;
    }};
    line-height: ${(props) => props.theme.lineHeight};
    margin: ${(props) => props.margin || 0};
    ${visuallyHidden};
`;