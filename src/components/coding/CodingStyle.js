import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export const CodingSection = styled.section`
  position: relative;
  z-index: 10;

  background-color: var(--color-grey-main);
  overflow: hidden;
`;

export const CodingContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  max-width: 169rem;
  width: 95vw;
  margin: 0 auto;
  padding: 10rem 0 12rem;

  @media only screen and (max-width: 93.75em) {
    width: calc(100vw - 8rem);
  }

  @media only screen and (max-width: 65.5em) {
    width: calc(100vw - 12rem);
  }

  @media only screen and (max-width: 37.5em) {
    width: calc(100vw - 9rem);
  }

  @media only screen and (max-width: 28em) {
    width: calc(100vw - 5rem);
  }

  h1 {
    margin-bottom: 2rem;

    color: var(--color-blue-dark);

    text-align: center;
    font-size: 5rem;
    font-family: Manrope;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    line-height: 6rem;

    @media only screen and (max-width: 65.5em) {
      width: 95%;
    }
  }
`;

export const DeviceContainer = styled(motion.article)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 8rem;

  width: 100%;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }

  & > div:first-of-type {
    display: block;
    position: relative;

    width: 25%;

    @media only screen and (max-width: 56.25em) {
      width: 50%;
      margin-bottom: 5rem;
    }

    @media only screen and (max-width: 31.5em) {
      width: 65%;
    }

    video {
      position: absolute;
      top: 6%;
      left: 13%;

      width: auto;
      height: 87%;

      border-radius: 2.8rem;
    }
  }

  & > div:nth-of-type(2) {
    width: 65%;
    height: max-content;

    @media only screen and (max-width: 56.25em) {
      width: 100%;
    }
  }
`;

export const PhoneImage = styled(GatsbyImage)`
  width: 100%;
`;

export const DashImage = styled(GatsbyImage)`
  width: 100% !important;

  @media only screen and (max-width: 900px) {
    aspect-ratio: 1 / 1.316 !important;
  }
`;

export const CodingBtn = styled(ScrollLink)`
  padding: 1.4rem 3rem 1.5rem;

  transition: all 0.3s;

  box-shadow: rgb(8 84 207 / 60%) 0px 0.4rem 1rem 0px;

  border: none;
  border-radius: 0.6rem;

  background-color: rgba(8, 84, 207, 1);

  color: white;
  font-family: ManropeMedium;
  font-size: 1.8rem;
  letter-spacing: 1px;
  white-space: nowrap;

  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: rgb(8 84 207 / 90%) 0px 0.4rem 1rem 0px;
    }
  }
`;
