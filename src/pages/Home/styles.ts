import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  max-width: 100%;

  padding: 5rem 2rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;

    padding: 5rem 8rem;
  }

  > main {
    @media (min-width: 1024px) {
      max-width: 60rem;
      overflow-x: auto;

      margin: 5rem 0;
    }

    > div {
      min-height: 50rem;

      margin-top: 5rem;

      position: relative;

      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      border-radius: 30px;

      padding: 1rem;

      > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};

        margin: 0 0 2rem 1rem;
      }
    }
  }
`;
