import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 62.5%;
    
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background: linear-gradient(45deg, #000 0%, #000 52%, #4f4f4f 100%);
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        min-width: 320px;
        min-height: 100vh;
    }
    // filter: drop-shadow(0 0 2em #646cffaa);
`;

