import { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
    }
`;
