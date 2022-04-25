import { motion } from "framer-motion";
import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;

  display: grid;
  place-items: center;

  min-height: calc(100vh - 9.8rem);

  background-image: url("hero-glow.svg"),
    linear-gradient(
      to left bottom,
      var(--color-blue-dark),
      var(--color-blue-darker) 50%
    );
  background-size: 200%;
  background-position: center center;
  background-repeat: no-repeat;

  article {
    position: relative;

    display: grid;
    place-items: center;

    @media only screen and (max-width: 28.5em) {
      h1 {
        font-size: 25rem;
      }

      svg {
        top: -5rem;
        max-width: 30rem;
      }
    }
    @media only screen and (max-width: 23.5em) {
      h1 {
        font-size: 20rem;
      }
      svg {
        top: -8rem;
        max-width: 25rem;
      }
    }
  }

  h1 {
    font-size: 30rem;
    line-height: 30rem;
    color: white;
    text-align: center;
  }

  h3 {
    font-size: 3rem;
    color: white;
    text-align: center;
  }
`;

export const Space404 = styled.div`
  & > div:first-of-type {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 10;

    transform: translateX(-50%);

    max-width: 35rem;
    width: 90vw;
  }
`;

export const HomeBtn = styled(motion(Link))`
  margin-top: 5rem;
  padding: 1.2rem 3rem;

  box-shadow: rgb(255 255 255 /30%) 0px 0.4rem 1rem 0px;

  border: none;
  border-radius: 0.6rem;

  background-color: white;

  font-family: ManropeMedium;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
  color: #2b2d42;

  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: box-shadow ease 0.2;
      box-shadow: rgb(255 255 255 / 60%) 0px 0.4rem 1rem 0px;
    }
  }
`;
