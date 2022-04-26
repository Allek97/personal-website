import styled from "styled-components";

export const ProjectPageStory = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 4rem;

  padding-bottom: 15rem;

  border-bottom: 2px solid #190e42;

  @media only screen and (max-width: 58em) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: block;

  width: 60%;

  @media only screen and (max-width: 58em) {
    width: 100%;
    max-width: 80rem;
    margin-bottom: 8rem;
  }

  h1 {
    margin-bottom: 2rem;

    font-size: 3.2rem;

    font-family: ManropeMedium;

    &:not(:first-child) {
      margin-top: 8rem;
    }
  }

  p {
    font-size: 2rem;

    font-family: PoppinsRegular;
    font-weight: 400;
    color: #555454;
  }

  .projectPage-used,
  .projectPage-lesson,
  .projectPage-conclusion {
    p:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  .projectPage-used {
    h3 {
      font-family: ManropeMedium;
      font-size: 2.2rem;
    }
  }
`;
export const ProjectAd = styled.div`
  position: sticky;
  top: 15rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: start;

  width: 25%;

  @media only screen and (max-width: 58em) {
    position: static;
    top: 0;

    align-items: center;

    width: 100%;
    max-width: 28rem;
    margin-bottom: 10rem;
  }

  h1 {
    margin-bottom: 1rem;

    font-size: 3.2rem;
    font-family: ManropeMedium;
  }

  span {
    margin-bottom: 2rem;

    font-size: 1.7rem;
    font-weight: 600;
    color: #8d8d8d;
  }

  h2 {
    margin-top: 2rem;

    font-size: 2.5rem;
    font-family: ManropeMedium;
  }
  h3 {
    font-family: ManropeMedium;

    margin-bottom: 2rem;
    font-size: 1.7rem;
    color: #242323;
  }

  ul {
    display: flex;
    justify-content: space-between;

    width: 80%;

    @media only screen and (max-width: 58em) {
      width: 95%;
    }

    a {
      text-decoration: none;

      svg {
        transition: transform 0.2s ease;

        width: 3.2rem;
        height: 3.2rem;

        fill: rgba(25, 14, 66, 1);

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const ProjectPageBtn = styled.a`
  padding: 0.8rem 0;

  transition: all 0.3s;

  box-shadow: 0 3px 10px rgb(19 15 235 / 20%);

  border: 1px solid rgba(25, 14, 66, 1);
  border-radius: 2rem;
  width: 19rem;

  /* background-color: rgba(25, 14, 66, 1); */

  color: black;
  font-family: ManropeMedium;
  font-size: 1.8rem;
  letter-spacing: 1px;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;

  cursor: pointer;

  &:first-of-type {
    margin-bottom: 3rem;
  }

  &:hover {
    /* box-shadow: rgb(25 14 66 / 90%) 0px 0.4rem 1rem 0px; */
    background-color: rgba(25, 14, 66, 1);
    color: white;
  }
`;
