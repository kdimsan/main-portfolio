import styled from "styled-components";

export const Container = styled.div`

    >h2 {
        display: inline;
        font-size: 2rem;
    }
`;

export const Content = styled.div`

    >ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.7rem;

        @media(min-width: 1024px) {
        }

        >li {
            list-style: none;
            display: inherit;
        }
    }
`;

export const ProjectForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 2px solid #0e0221;
    border-radius: 5px;

    transition: transform 0.3s, filter 0.3s;
    
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(1px 1px 5px #000) brightness(0.5);
    }
   
    >img {
        width: 25rem;
        height: 10rem; 
    }

    >span {
        width: 100%;

        display: flex;
        justify-content: center;

        font-size: 1.5rem;
        font-weight: 500;

        background: linear-gradient(0deg, #0e0221 0%, #1b0045 100%);
    }
`;