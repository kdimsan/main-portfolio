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

            border: 1px solid silver;
        }
    }
`;