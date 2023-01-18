import styled, { css } from "styled-components";

interface Props {
    variant: "freelance" | "project";
}

export const ProjectSection = styled.section<Props>`
    &:first-of-type {
        background-color: var(--color-grey-main);
        border-top: 1px solid rgba(141, 153, 174, 0.3);
        border-bottom: 1px solid rgba(141, 153, 174, 0.3);
    }

    ${({ variant }) =>
        variant === "project"
            ? css`
                  background-color: var(--color-grey-main);
              `
            : css`
                  background-image: linear-gradient(
                      to left bottom,
                      var(--color-blue-dark),
                      var(--color-blue-darker) 50%
                  );
              `}
`;

export const ProjectContainer = styled.article<Props>`
    max-width: 162rem;
    width: 92vw;
    margin: 0 auto;
    padding: 10rem 0;

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

    h1 {
        margin-bottom: 8rem;

        color: ${({ variant }) =>
            variant === "project"
                ? "var(--color-blue-dark)"
                : "var(--color-grey-main)"};

        text-align: center;
        font-size: 5rem;
        font-family: Manrope;
        text-transform: uppercase;
        line-height: 8.5rem;
        letter-spacing: -0.03em;
    }
`;
