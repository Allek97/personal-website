import styled, { css } from "styled-components";
import tw from "twin.macro";

interface Props {
    theme: "white" | "darkBlue";
}
interface ContentProps {
    variant: "freelance" | "project";
}

export const Root = styled.button<Props>`
    ${tw`relative flex w-max mx-auto mt-52 transition
    [font-size: 2.5rem] font-bold [font-family: "ManropeLight"]
    
    focus:(outline-none opacity-100)
    disabled:(opacity-50 transition)`}

    /* ${({ theme }) =>
        theme === "darkBlue"
            ? css`
                  ${tw`[color: inherit]`}
              `
            : css`
                  ${tw`[color: white]`}
              `}; */

    & > div:first-of-type {
        ${tw`absolute z-50 ring-0 inset-0 transform rounded-2xl 
        opacity-100 transition border-2 [transition-duration: 300ms]
        disabled:(opacity-50 border-2)
        `}

        ${({ theme }) =>
            theme === "darkBlue"
                ? css`
                      ${tw`[border-color: #d1dadd]`}

                      @media (hover: hover) and (pointer: fine) {
                          &:hover {
                              ${tw`(ring-offset-4 ring-2 [--tw-ring-color: #10244d] transition-all [transition-duration: 300ms])`}
                          }
                      }
                  `
                : css`
                      ${tw`[border-color: #490606]`}
                      @media (hover: hover) and (pointer: fine) {
                          &:hover {
                              ${tw`(ring-offset-4 ring-2 [--tw-ring-color: white] transition-all [transition-duration: 300ms])`}
                          }
                      }
                  `};
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover div:first-of-type {
            ${tw`(border-0 border-transparent)`}
        }
    }
    &:focus {
        outline: none;
        outline-width: 2px;
    }
`;

export const Content = styled.div<ContentProps>`
    ${tw`relative flex h-full w-full items-center justify-center
    whitespace-nowrap space-x-5 px-12 py-8`}

    color : ${({ variant }) =>
        variant === "freelance" ? "var(--color-blue-dark)" : "white"}
`;
