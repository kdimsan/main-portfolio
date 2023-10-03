import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 100;
`;

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    padding: 2rem;

    background: linear-gradient(45deg, #dbdbdb 0%, #5e018c 50%, #8c018c 100% );  
    border-radius: 10px;

    >div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }
`;

export const ModalImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >img {
        width: 28rem;
        height: 20rem;

        margin: 5px;

        border-radius: 10%;
        box-shadow: 0 0 11px 3px #000;
    }
`;

export const ModalText = styled.div`
    margin-right: 5rem;
    
    >h2 {
        font-size: 2rem;
    }

    >p {
        font-size: 1.5rem;
        text-align: justify;
    }

    >span {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 1.5rem 0;

        font-size: 1.4rem;

        >svg {
            width: 2rem;
            height: 2rem;
        }

        >a {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.87);

            &:hover {
                filter: drop-shadow(0 0 2px #dddddd);
            }
        }
    }
`;