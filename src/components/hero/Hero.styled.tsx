import styled, { css, keyframes } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import StandSvg from "../../assets/svgs/stand.svg";

// TODO: Find a way to not use static folder for backimg svgs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HeroGlow = require("../../../static/hero-glow.svg").default;

const updown = keyframes`
    from {
        transform: translateY(10px);
    }to {
        transform: translateY(-10px);
    }
`;

export const Header = styled.header`
    position: relative;

    display: block;
    /* height: 95vh; */
    background-image: url("${HeroGlow}"),
        linear-gradient(
            to left bottom,
            var(--color-blue-dark),
            var(--color-blue-darker) 50%
        );
    background-size: 200%;
    background-position: center;
    background-repeat: no-repeat;
`;

export const HeroArticle = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 70vh;
    height: 80vh;
    max-width: 170rem;
    margin: 0 auto;
    padding-top: 5rem;
    padding-left: 7.5rem;
    /* padding-right: 7.5rem; */
    padding-bottom: 12rem;
    box-sizing: content-box;

    overflow: hidden;

    @media only screen and (max-width: 65.5em) {
        flex-direction: column;

        padding: 14rem 8.5rem 0;

        box-sizing: border-box;

        height: auto;
    }

    @media only screen and (max-width: 37.5em) {
        padding: 14rem 4.5rem 0;
    }

    @media only screen and (max-width: 28em) {
        padding: 14rem 2.5rem 0;
    }

    & > div:first-of-type {
        display: block;
        min-width: 60rem;

        box-sizing: border-box !important;

        & > div {
            &:nth-of-type(3) {
                margin-top: 5rem;
            }
        }

        @media only screen and (max-width: 65.5em) {
            min-width: 0;
            margin-bottom: 10rem;
            order: 2;
        }

        h1 {
            margin-top: 2rem;
            margin-bottom: 1rem;

            font-size: 7.5rem;
            font-family: Manrope;
            text-transform: uppercase;

            line-height: 7.5rem;
            letter-spacing: -0.03em;

            color: white;

            @media only screen and (max-width: 25em) {
                font-size: 6rem;
                line-height: 6.1rem;
            }
        }

        p {
            font-size: 2.4rem;
            font-family: ManropeLight;
            font-weight: 400;
            line-height: 2.9rem;
            color: var(--color-blue-grey);
            letter-spacing: -0.03em;

            @media only screen and (max-width: 25em) {
                font-size: 2rem;
                line-height: 2.49rem;
            }
        }
    }
`;

export const GlobeContainer = styled.div`
    display: flex;
    justify-content: center;

    width: 70rem !important;
`;

export const GlobeCanvas = styled(motion.canvas)`
    display: block;

    width: 145rem !important;
    height: auto !important;

    @media only screen and (max-width: 65.5em) {
        width: 165rem !important;
        margin-bottom: -42rem;
    }

    @media only screen and (max-width: 34.5em) {
        width: 125rem !important;
        margin-bottom: -30rem;
    }
`;

export const ExtraPlanetImage = styled(GatsbyImage)`
    position: relative;

    display: block;

    min-width: 75rem;

    @media only screen and (max-width: 65.5em) {
        /* min-width: 58rem; */
        /* margin-bottom: -22vw; */
        margin-top: 5vw;
        margin-bottom: 10vw;
    }
    @media only screen and (max-width: 37.5em) {
        min-width: 0;
        width: 90vw;
    }
`;

export const UFOContainer = styled(motion.div)`
    position: absolute !important;
    z-index: 50;

    position: absolute !important;
    bottom: -9rem;
    right: 20rem;
    z-index: 20;

    width: 48rem;
    height: auto;

    @media only screen and (max-width: 65em) {
        bottom: -8rem;
        left: 38%;
        right: 0;

        width: 43rem;
    }
    @media only screen and (max-width: 37.5em) {
        left: 20%;
    }
    @media only screen and (max-width: 28em) {
        left: 5%;
        width: 38rem;
    }
    @media only screen and (max-width: 22em) {
        left: -4%;
    }
`;

export const UFOImage = styled(GatsbyImage)`
    animation: ${updown} 4s ease-in-out alternate infinite forwards;

    filter: drop-shadow(4px 6px 8px black);

    object-fit: contain;
`;

export const Stand = styled(StandSvg)`
    position: absolute;
    bottom: 0;
    z-index: 10;

    width: 100%;
    height: auto;

    path {
        fill: var(--color-grey-main);
    }
`;

export const ProjectLink = styled(motion.a)`
    position: relative;

    display: block;

    overflow: visible;

    padding: 2rem 3rem 2rem;

    margin-top: 2rem;

    transition: all 0.3s;

    /* box-shadow: rgb(8 84 207 / 60%) 0px 0.4rem 1rem 0px; */

    border: none;
    /* border-radius: 0.6rem; */

    background-image: linear-gradient(76deg, #032364, #03112e);

    clip-path: polygon(0 0, 95% 0, 100% 35%, 100% 100%, 5% 100%, 0% 65%);

    color: white;
    font-family: ManropeMedium;
    font-size: 1.8rem;
    letter-spacing: 1px;
    white-space: nowrap;
    text-decoration: none;

    cursor: pointer;
`;

interface Props {
    isgray: boolean;
}

export const PlanetImage = styled(GatsbyImage)<Props>`
    width: 100%;
    height: auto;

    transition: all 0.15s ease-out;

    ${(props) =>
        props.isgray &&
        css`
            filter: drop-shadow(0px -4px 15px rgba(9, 11, 134, 0.747));
        `}
`;

export const GlobeTooltip = styled(motion.span)`
    position: absolute;
    left: 50%;
    bottom: -50%;
    z-index: 10;

    display: flex;
    padding: 5px 11px;

    box-shadow: 0 0px 15px -1px rgb(255 255 255);
    border-radius: 4px;

    background: white;
    color: black;
    font-weight: 500;
    font-size: 1.8rem;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
`;

export const ProjectBtn = styled(motion.button)`
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
