import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    >main {
        padding: 0 2rem;
        
        @media(min-width: 1024px) {
            padding: 0 5rem;
            margin: 4rem 0;
        }
        
        >div {
            height: 600px;

            border-bottom: 1px solid silver;
            border-top: 1px solid silver;
            border-radius: 8px;

            padding: 1rem;
            margin: 2rem 0;
        }
    }
`;