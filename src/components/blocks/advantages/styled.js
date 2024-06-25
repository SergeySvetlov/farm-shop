import styled from "styled-components";
import { Ul } from "../../elements/index";
import Button from "../../ui/button/button";

export const StyledAdvantages = styled.section`
    padding: 100px 0;

    & h2 {
        margin: 0 auto 64px auto;
        //max-width: 714px;
    }
`;

export const StyledList = styled(Ul)`
    margin: 0 0 64px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const AdvantagesButton = styled(Button)`
    max-width: 350px;
    margin: 0 auto;
`;