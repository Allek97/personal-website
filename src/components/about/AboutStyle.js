import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  padding: 8rem 0;
  background-image: linear-gradient(
    to left bottom,
    var(--color-blue-dark),
    var(--color-blue-darker) 50%
  );

  overflow: hidden;
`;

export const AboutContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 162rem;
  margin: 0 auto;

  color: white;

  @media only screen and (max-width: 93.75em) {
    width: calc(100vw - 15rem);
  }

  @media only screen and (max-width: 65.5em) {
    max-width: 92vw;
  }

  @media only screen and (max-width: 37.5em) {
    width: calc(100vw - 9rem);
  }

  @media only screen and (max-width: 28em) {
    width: calc(100vw - 5rem);
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin-bottom: 2rem;

    @media only screen and (max-width: 47.5em) {
      width: 100%;
    }

    h1 {
      position: relative;

      margin: 3.5rem 0;

      font-size: 5rem;
      font-family: Manrope;
      text-align: center;

      &:after {
        content: "";

        position: absolute;
        bottom: -1rem;
        left: 50%;

        transform: translateX(-50%);

        height: 2px;
        width: 7rem;

        background-color: white;
      }
    }
    h3 {
      margin-bottom: 4rem;

      font-size: 3.2rem;
      font-family: ManropeLight;
      font-weight: 300;
      text-align: center;

      letter-spacing: -0.03em;
    }
    p {
      font-size: 2.1rem;
      line-height: 2.55rem;
      font-family: ManropeLight;
      font-weight: 100;
      text-align: center;

      color: var(--color-blue-grey);
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    align-items: center;
    h1 {
      margin: 3.5rem 0;

      font-size: 4rem;
      font-family: Manrope;
      text-align: center;
    }
  }
`;

export const ProfileImage = styled(GatsbyImage)`
  width: 25rem;
  border-radius: 50%;
`;

export const SkillBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  /* gap: 2rem;
  grid-gap: 2rem; */

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 1rem 2.5rem;

    svg {
      width: 5rem;
      height: 5rem;
      fill: white;
    }

    span {
      margin: 1rem 0;

      font-size: 1.8rem;
      font-family: ManropeLight;
      font-weight: 100;
    }
  }
  #SAS {
    svg {
      path {
        fill: white !important;
      }
    }
  }
`;
