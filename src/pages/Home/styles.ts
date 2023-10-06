import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100%;
    max-width: 100%;

    position: fixed;

    @media(min-width: 1024px) {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 10%;

       padding: 0 8rem;
    }

    >main {
        overflow-x: auto;
        
        @media(min-width: 1024px) {
            max-width: 60rem;
        }
        
        >div {
            margin-top: 10rem;
            min-height: 50rem;
            border-radius: 8px;
            height: 100vh;

            border: 1px solid red;
        }
    }
`;