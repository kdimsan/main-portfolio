import styled from "styled-components";

export const Container = styled.div`
    >h2 {
        font-size: 2rem;
    }
`;

export const Content = styled.div`
    padding: 5rem;
    >ul {
        display: flex;
        gap: 2rem;

        >li {
            list-style: none;

            border: 2px solid #0e0221;
            border-radius: 5px;
        }
    }
`;

export const ProjectForm = styled.div`
    display: flex;
    flex-direction: column;
   
    >img {
        width: 30rem;
        height: 20rem; 
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