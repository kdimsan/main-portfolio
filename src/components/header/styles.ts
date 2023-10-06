import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    

    display: flex;
    justify-content: center;
    
    padding: 10rem 0;
    
    position: sticky;
`;

export const DesktopHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-right: 3rem;

    >.apresentation {
        >span {
            font-size: ${({theme}) => theme.FONT_SIZE.FS_M};
        }

        >h1 {
            font-size: ${({theme}) => theme.FONT_SIZE.FS_6L};
            white-space: nowrap;
        }

        >h2 {
            font-size: ${({theme}) => theme.FONT_SIZE.FS_2L};
        }
    }

    >nav {
        >ul {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            
            list-style: none;

            >li {
                font-size: ${({theme}) => theme.FONT_SIZE.FS_2L};
                font-weight: 500;
                transition: filter 0.2s ease-in-out;

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
    }

    >.links {
        >ul{ 
            list-style: none;

            display: flex;
            gap: 1.5rem;

            >li{
                >a {
                    >svg {
                        width: 2rem;
                        height: 2rem;

                        &:hover {
                            filter: drop-shadow(0 0 3px #fff);
                            transform: translate(-1px, -1px);
                        }
                    }
                }
            } 
        }
        
       
    }
    
`;