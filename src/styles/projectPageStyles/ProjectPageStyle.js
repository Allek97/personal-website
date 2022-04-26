import styled from "styled-components";

export const ProjectPage = styled.div`
  height: 100%;
  background-color: var(--color-grey-main);
`;

export const ProjectPageContent = styled.div`
  display: block;

  max-width: 162rem;
  width: 95vw;
  margin: 0 auto;

  padding-top: 20rem;

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
`;

// NOTE: ProjectPageOverview

export const ProjectPageOthers = styled.div`
  display: block;

  padding-bottom: 10rem;
  h1 {
    margin: 5rem 0;

    text-align: center;
    font-family: ManropeMedium;
    font-size: 3.5rem;
  }
`;
