import styled, { css, keyframes } from "styled-components";

const fadeVertically = keyframes`
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const ProjectSection = styled.section`
  background-color: var(--color-grey-main);
`;

export const ProjectContainer = styled.article`
  max-width: 162rem;
  width: 92vw;
  margin: 0 auto;
  padding: 10rem 0;

  @media only screen and (max-width: 93.75em) {
    width: calc(100vw - 15rem);
  }

  @media only screen and (max-width: 65.5em) {
    width: calc(100vw - 17rem);
  }

  @media only screen and (max-width: 37.5em) {
    width: calc(100vw - 9rem);
  }

  @media only screen and (max-width: 28em) {
    width: calc(100vw - 5rem);
  }

  h1 {
    opacity: 0;
    transform: translateY(100%);
    ${(props) =>
      props.animateText &&
      css`
        animation: ${fadeVertically} 0.6s ease-out 1 forwards;
      `};

    margin-bottom: 8rem;

    background-image: linear-gradient(
      76deg,
      var(--color-blue-dark),
      var(--color-blue-darker)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    text-align: center;
    font-size: 5rem;
    font-family: Manrope;
    text-transform: uppercase;
    line-height: 8.5rem;
    letter-spacing: -0.03em;
  }
`;
