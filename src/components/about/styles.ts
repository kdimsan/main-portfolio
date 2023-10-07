import styled from "styled-components";

//AiFillHtml5 DiJavascript DiHtml5 DiNodejsSmall DiReact DiCss3 TbBrandTypescript

export const Container = styled.div`
  > p {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    margin: 0 1rem;

    @media (min-width: 1024px) {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
    }
  }
`;

export const SkillsContainer = styled.div`
  margin: 3rem 1rem 0;

  > h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};

    margin-bottom: 2rem;
  }
`;

export const DevelopmentSkillsContent = styled.div`
  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    @media (min-width: 320px) and (max-width: 1023) {
      .react {
        background: #01dbfc;
      }
      .typescript {
        background: #087ece;
      }

      .javascript {
        background: rgb(247, 224, 24, 0.9);
      }

      .css {
        background: #004ce8;
      }

      .html5 {
        background: #ff5225;
      }

      .nodejs {
        background: #58a149;
      }
    }

    @media (min-width: 1024px) {
      .react,
      .typescript,
      .javascript,
      .css,
      .html5,
      .nodejs {
        transition: transform 0.35s ease-in, box-shadow 0.25s ease;
      }
      .react:hover {
        background: #01dbfc;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }

      .typescript:hover {
        background: #087ece;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }

      .javascript:hover {
        background: #f7e018;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }

      .css:hover {
        background: #004ce8;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }

      .html5:hover {
        background: #ff5225;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }

      .nodejs:hover {
        background: #58a149;
        box-shadow: 9px 9px 0px rgba(255, 255, 255, 0.87),
          12px 12px 14px rgba(255, 255, 255, 0.87);
        transform: translate(-5px, -5px);
      }
    }

    > li {
      width: 10rem;
      height: 10rem;

      max-width: 10rem;
      max-height: 10rem;

      flex-grow: 1;
      flex-basis: 100px;

      margin: 1rem 1rem;

      display: inline-block;
      text-align: center;

      background: linear-gradient(145deg, #9b2aa8, #83238d);
      border-radius: 50%;
      box-shadow: 10px 10px 16px #7a2184, -6px -6px 16px rgb(168, 45, 182, 0.7);

      position: relative;
      > svg {
        width: 5rem;
        height: 5rem;

        position: absolute;
        top: 24px;
        left: 25px;
      }
    }
  }
`;

export const Knowledge = styled.div``;
