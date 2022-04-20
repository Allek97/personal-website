import styled, { css, keyframes } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link as ScrollLink } from "react-scroll";

const fadeVertically = keyframes`
to {
    opacity: 1;
    transform: translateY(0);
}
`;
const slideHorizontally = keyframes`
to {
    transform: translateX(0);
}
`;

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

  opacity: 0;
  transform: translateY(100%);
  ${(props) =>
    props.animateText &&
    css`
      animation: ${fadeVertically} 0.5s ease-out 1 forwards;
    `};

  max-width: 160rem;
  width: 95vw;
  margin: 0 auto;
  padding: 10rem 0 12rem;

  h1 {
    margin-bottom: 2rem;

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

export const DeviceContainer = styled.article`
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

    transform: translateX(-80vw);
    ${(props) =>
      props.animatePhone &&
      css`
        animation: ${slideHorizontally} 0.5s ease-out 1 forwards;
      `};

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

    opacity: 1;
    transform: translateX(80vw);
    ${(props) =>
      props.animateDash &&
      css`
        animation: ${slideHorizontally} 0.5s ease-out 1 forwards;
      `};

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
  height: 100% !important;
  & > div:first-of-type {
    width: 100% !important;
    height: 100% !important;
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

  &:hover {
    box-shadow: rgb(8 84 207 / 90%) 0px 0.4rem 1rem 0px;
  }
`;
