import { css } from "styled-components";

const visuallyHidden = css`
    ${(props) => props.hide ? `
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;

    white-space: nowrap;

    border: 0;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    ` : null}
`;

export default visuallyHidden;