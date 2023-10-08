import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  max-width: 100%;

  padding: 5rem 2rem;

  @media (min-width: 1024px) {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;

    padding: 0 8rem;
  }

  > main {
    @media (min-width: 1024px) {
      max-width: 60rem;
      overflow-x: auto;
    }

    > div {
      min-height: 50rem;
      height: 100vh;

      margin-top: 5rem;

      position: relative;

      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      border-radius: 30px;

      padding: 1rem;

      > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};

        margin: 0 0 2rem 1rem;
      }

      @media (min-width: 1024px) {
        &:nth-child(1) {
          margin-top: 10rem;
        }
      }
    }
  }
`;
