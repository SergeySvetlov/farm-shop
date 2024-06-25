import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: ${(props) => props.theme.pageWidth};
    padding: 0 ${(props) => props.theme.pagePadding};
    margin: 0 auto;
`;