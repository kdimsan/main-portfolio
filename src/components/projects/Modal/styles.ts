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

    max-height: 80%;
    width: 90%;
    overflow-y: auto;

    padding: 4rem;

    background: linear-gradient(45deg, #dbdbdb 0%, rgb(140, 1, 140, 0.8) 30%, #5e018c 100% );  
    border-radius: 10px;

    @media(min-width: 1024px) and (max-width: 1300px) {
        padding: 4rem;
        width: 80%;
    }
    @media(min-width: 1301px) {
        width: 70%;
    }

    >div {
        display: flex;
        flex-direction: column;
        
        @media(min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            gap: 5rem;
        }
    }

    >button {
        position: absolute;
        top: 20px;
        right: 15px;
        >svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;

export const ModalImage = styled.div`
`;

export const ModalText = styled.div`
    @media(min-width: 320px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
    >h2 {
        font-size: 2.2rem;
        margin: 2rem 0 0;
        align-self: center;
        
        @media(min-width: 1024px) {
            font-size: 3rem;
        }
    }

    >p {
        font-size: 1.5rem;
        text-align: justify;

        margin: 1rem 0;

        >a {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.87);

            &:hover {
                filter: drop-shadow(0 0 2px #dddddd);
            }
        }

        @media(min-width: 1024px) {
            font-size: 1.7rem;
        }
    }

    >span {
        display: flex;
        align-items: center;
        gap: 5px;

        margin: 1rem 0;

        font-size: 1.5rem;
        text-align: justify;

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

        @media(min-width: 1024px) {
            font-size: 1.7rem;
        }
    }
`;