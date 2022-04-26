import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { fadeVertically } from "../../abstracts/animations";

export const ProjectPageOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 5rem;
  margin-bottom: 8rem;

  border-bottom: 2px solid #190e42;

  @media only screen and (max-width: 58em) {
    flex-direction: column;
  }

  .projectPage-overview-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 52%;
    padding: 0 4rem 0 0;

    font-size: 3rem;

    @media only screen and (max-width: 58em) {
      align-items: center;

      width: 100%;
      max-width: 80rem;
      margin-bottom: 5rem;
      padding: 0;
    }

    h1 {
      margin-bottom: 2rem;

      font-size: 4rem;
      line-height: 4rem;
      font-family: Manrope;
      font-weight: 600;
      color: black;
    }

    p {
      margin-bottom: 2rem;

      font-size: 2rem;
      font-family: PoppinsRegular;
      font-weight: 400;
      line-height: 2.3rem;
      color: var(--color-grey-dark);
    }

    .projectPage-stacks {
      display: flex;
      align-items: center;

      margin-bottom: 2rem;

      #WebGL {
        svg {
          width: 4.2rem;
          height: 4.2rem;
        }
      }

      span {
        &:not(:last-child) {
          margin-right: 0.85rem;
        }

        svg {
          width: 3rem;
          height: 3rem;

          fill: #190e42;
        }
      }
    }

    .projectPage-tags {
      display: flex;

      margin-bottom: 2rem;

      span {
        display: inline-block;

        &:not(:last-of-type) {
          margin-right: 1rem;
        }
        padding: 0.4rem 0.8rem;

        background: #190e42;

        border-radius: 4px;

        font-size: 1.3rem;
        font-family: ManropeLight;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: white;
      }
    }
  }
`;

export const ProjectPageMore = styled(motion.a)`
  width: max-content;

  border-bottom: 2px solid rgba(8, 84, 207, 1);

  color: rgba(8, 84, 207, 1);
  font-family: ManropeMedium;
  font-size: 1.7rem;
  line-height: 2.2rem;
  text-decoration: none;

  cursor: pointer;
`;

export const ProjectPageImage = styled(GatsbyImage)`
  width: 48%;
  height: max-content;
  object-fit: contain;

  opacity: 0;
  transform: translateY(50%);

  animation: ${fadeVertically} 0.75s cubic-bezier(0.5, 0, 0, 1) 0.8s forwards;

  border-radius: 1rem;

  @media only screen and (max-width: 58em) {
    align-items: center;
    width: 100%;
    max-width: 80rem;
  }
`;
