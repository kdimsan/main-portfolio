import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1024px) {
    height: 100vh;

    display: flex;
    justify-content: center;

    padding: 10rem 0;
  }
`;

export const DesktopHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
  }

  > .apresentation {
    > span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    }
    > h1 {
      font-size: clamp(8px, 7vw, 30px);
      white-space: nowrap;
    }
    @media (min-width: 1024px) {
      > h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_6L};
        white-space: nowrap;
      }

      > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
      }
    }
  }

  > nav {
    > ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      list-style: none;

      > li {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
        font-weight: 500;
        transition: filter 0.2s ease-in-out;

        > a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.87);

          position: relative;
          display: inline-block;

          > .underline {
            position: relative;
            display: inline-block;
          }

          > .underline::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: transform 0.3s ease-in-out;
          }

          > .underline:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          > .active::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: transform 0.3s ease-in-out;
          }

          > .active {
            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }

        &:hover {
          filter: drop-shadow(0 0 2px #dbdbdb);

          cursor: pointer;
        }
      }
    }
  }

  > .links {
    @media (min-width: 320px) and (max-width: 1023px) {
      margin-left: 3px;
    }
    > ul {
      list-style: none;

      display: flex;
      gap: 1.5rem;

      > li {
        > a {
          > svg {
            width: 2rem;
            height: 2rem;
            color: #eee;

            &:hover {
              filter: drop-shadow(0 0 3px #aaa);
              transform: translate(-1px, -1px);
            }
          }
        }
      }
    }
  }
`;

export const Sidebar = styled.div``;
