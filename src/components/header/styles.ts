import styled from "styled-components";

export const Container = styled.div`
    height: 7rem;

    display: flex;
    align-items: center;

    padding: 0 3rem;

    border-bottom: 1px solid silver;  

    @media(min-width: 1024px) {
        padding: 0 5rem;
    }
`;

export const MobileHeader = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >button {
        width: 2.2rem;
        height: 2.2rem;

        >svg {
            width: 2.2rem;
            height: 2.2rem;
        }
    }

    .sidebar {
        width: 40%;
        max-width: 30rem;
        height: 100%;

        display: flex;

        padding: 3rem 2rem;

        position: fixed;
        top: 0;
        right: -100%;
        
        background: linear-gradient(0deg, #202023 0%, #333333 100%);

        >button {
            position: absolute;
            top: 7px;
            right: 7px;

            >svg {
                width: 2rem;
                height: 2rem;
            }
        }

        >ul {
            list-style: none;

            >li {
                margin: 5px;
                font-size: 1.7rem;   
                font-weight: 500;
            }
        }
    }

    .sidebar-open {
        right: 0;
        animation: sidebar-open .5s ease;
    }

    .sidebar-close { 
        right: -100%;
        animation: sidebar-close .5s ease;
    }

    @keyframes sidebar-open {
        from {
            right: -100%;
        }
        to {
            right: 0;
        }
    }

    @keyframes sidebar-close {
        from {
            right: 0;
        }
        to {
            right: -100%;
        }
    }

`;

export const DesktopHeader = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    >ul {
        display: flex;
        gap: 1.5rem;
        
        list-style: none;

        >li {
            font-size: 1.8rem;
            font-weight: 500;

            >a {
                text-decoration: none;
                color: rgba(255, 255, 255, 0.87);
            }

            &:hover {
                filter: drop-shadow(0 0 2px #dbdbdb);

                cursor: pointer;
            }
        }
    }
`;