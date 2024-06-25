import styled from "styled-components";
import Container from "../../layout/container/container";

export const StyledMain = styled.main`
    padding: 40px 0 0 0;
    background-color: ${(props) => props.theme.colorBackgroundGrey};
`;

export const StyledContainer = styled(Container)`
    display: flex;
`;