import styled, {css} from "styled-components";
import {Button} from "../../elements/index";

export const TabsList = styled.div`
    display: flex;
    margin: 0 0 16px 0;
`;

export const TabButton = styled(Button)`
    padding: 8px 12px 8px 12px;
    text-align: center;
    margin: 0 8px 0 0;
    border: 1px solid #0000001A;
    background-color: ${(props) => props.theme.colorBackgroundGrey};
    ${(props) => props.active ?
        css`
        background-color: ${(props) => props.theme.colorIconGood};
        color: ${(props) => props.theme.colorTextWhite};
        ` : null
    }
`;

export const TabContent = styled.div`
`;