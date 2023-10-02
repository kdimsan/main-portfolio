import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 62.5%;
    
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background: linear-gradient(0deg, #141414 0%, #444444 100% );  
        background-size: 300% 300%;
        animation: background-spin 10s linear infinite;
    
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
        min-width: 320px;
        min-height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;
    }

    button {
        cursor: pointer;

        background: none;
        border: none;
    }

    @keyframes background-spin {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`;

