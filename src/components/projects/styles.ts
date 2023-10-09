import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.7rem;

    margin: 1rem 1.5rem;

    > li {
      list-style: none;
      flex-grow: 1;
      flex-basis: 200;

      max-width: 35rem;
    }
  }
`;

export const ProjectForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;

  border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_BORDER};
  border-radius: 5px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(1px 1px 5px #000) brightness(0.5);
  }

  > img {
    width: 100%;
    height: 11rem;
  }

  > span {
    width: 100%;

    display: flex;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: 500;

    background: ${({ theme }) => theme.COLORS.BG_PROJECTS};
  }
`;
