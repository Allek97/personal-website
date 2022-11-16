/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";

import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

export const MenuBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in;

    width: 4rem;
    height: 4rem;

    border: 1px solid
        ${(props) =>
            props.$isOpen
                ? "#102a42"
                : props.$isScrolled
                ? "#102a42"
                : props.navColor};

    cursor: pointer;

    span {
        position: relative;

        display: block;

        transform: scaleX(1);

        width: 2rem;
        height: 2px;

        overflow: hidden;
        position: relative;
        background-color: transparent;

        transition: transform 0.3s ease;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:before,
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-in;
            background-color: ${(props) =>
                props.$isOpen
                    ? "#102a42"
                    : props.$isScrolled
                    ? "#102a42"
                    : props.navColor};

            transition: transform ease 300ms;
        }
        &:before {
            content: "";
            transform: translateX(0);
        }
        &:after {
            content: "";
            /* background-color: red; */
            transform: translateX(-200%);
        }
    }

    span:nth-of-type(2) {
        &:before,
        &:after {
            transition-delay: 75ms;
        }
    }
    span:nth-of-type(3) {
        &:before,
        &:after {
            transition-delay: 150ms;
        }
    }
    @media (hover: hover) and (pointer: fine) {
        &:hover span:before {
            transform: translateX(200%);
        }
        &:hover span:after {
            transform: translateX(0);
        }
    }
`;

export const NavContainer = styled(motion.div)`
    position: fixed;
    z-index: 40;

    width: 100%;
    height: max-content;

    transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);

    &:after {
        content: "";

        position: absolute;
        height: 4px;

        left: 2.6666666667vw;
        right: 2.6666666667vw;

        box-shadow: rgb(8 84 207 / 60%) 0px 0.4rem 1rem 0px;
        background-image: linear-gradient(76deg, #3a6bcd, #0b1e44);

        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);

        ${({ $isScrolled, $isOpen }) =>
            $isScrolled && !$isOpen
                ? css`
                      transform: scaleX(1);
                  `
                : css`
                      transform: scaleX(0);
                      transition: transform 0.1s cubic-bezier(0.19, 1, 0.22, 1);
                      transform-origin: left;
                  `}

        @media only screen and (max-width: 37.5em) {
            left: 4vw;
            right: 4vw;
        }
    }

    ${({ $isHidden, $isOpen }) =>
        $isHidden &&
        !$isOpen &&
        css`
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            transform: translateY(-100%) !important;
        `}

    ${(props) =>
        props.$isOpen
            ? css`
                  box-shadow: none;
              `
            : css`
                  box-shadow: ${props.$isScrolled
                      ? "rgb(0 0 0 / 20%) 0px 0px 5px"
                      : "none"};
              `}

  ${(props) =>
        props.$isOpen
            ? css`
                  background-color: "transparent";
              `
            : css`
                  background-color: ${props.$isScrolled
                      ? "var(--color-grey-main)"
                      : "transparent"}; ;
              `}
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 162rem;
    margin: 0 auto;
    padding: 1rem 7.5rem;

    box-sizing: content-box;

    @media only screen and (max-width: 65.5em) {
        padding: 1rem 8.5rem;
    }

    @media only screen and (max-width: 37.5em) {
        padding: 1rem 4.5rem;
    }

    @media only screen and (max-width: 28em) {
        padding: 1rem 2.5rem;
    }

    & > div:first-of-type {
        text-decoration: none;
        cursor: pointer;
        h3 {
            padding: 4px;

            transition: all 0.3s ease-in;

            border: 3px solid
                ${(props) =>
                    props.$isOpen
                        ? "#102a42"
                        : props.$isScrolled
                        ? "#102a42"
                        : props.navColor};

            font-size: 1.45rem;
            font-family: PoppinsBlack;
            text-shadow: 0 0 20px rgb(0 0 0 / 10%);
            line-height: 1.8rem;
            color: ${(props) =>
                props.$isOpen
                    ? "#102a42"
                    : props.$isScrolled
                    ? "#102a42"
                    : props.navColor};
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        h3 {
            margin-right: 2rem;

            transition: all 0.3s ease-in-out;

            font-size: 2.3rem;
            font-family: PoppinsBlack;
            font-weight: bold;
            text-shadow: 0 0 20px rgb(0 0 0 / 10%);
            line-height: 1.8rem;
            color: ${(props) =>
                props.$isOpen
                    ? "#102a42"
                    : props.$isScrolled
                    ? "#102a42"
                    : props.navColor};
        }
    }
`;

export const CloseMenu = styled(GrClose)`
    height: 2rem;
    width: 2rem;

    fill: "#102a42";
    background: transparent;
    border-color: transparent;

    transition: all 0.4s ease;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            transform: scale(1.3);
        }
    }
`;
