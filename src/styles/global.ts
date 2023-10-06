import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: 'Onest', sans-serif;
        font-size: 62.5%;
    
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);

        background: linear-gradient(45deg, rgb(199, 8, 193, 0.6) 0%, rgb(140, 1, 140, 0.8) 50%, #5e018c 100% );  
        background-size: 200% 200%;
        animation: background-movement 10s linear infinite;
        
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
    }

    button {
        cursor: pointer;

        background: none;
        border: none;
    }

    @keyframes background-movement {
        0% {
            background-position: 20% 0%;
        }
        25%{
            background-position: 100% 10%;
        }
        50% {
            background-position: 100% 100%;
        }
        75%{
            background-position: 10% 100%;
        }
        100% {
            background-position: 20% 0%;
        }
    }
`;

