import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        font-family: 'Rubik',sans-serif;
    }

    body {
        color: #000;
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
    }

    img {
        max-width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    :focus-visible {
        outline: none;
    }
`;