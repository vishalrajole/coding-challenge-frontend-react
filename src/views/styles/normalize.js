
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        box-sizing: border-box;
    }
    .custom-date-picker {
        display: inline-flex;
        font-size: 1rem;
        padding: 10px;
        height: 36px;
        overflow: hidden;
        border-radius: 3px;
        background: #fff;
        border: 1px solid #ddd;
    }
`;
