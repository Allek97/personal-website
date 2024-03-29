import styled from "styled-components";
import { ProjectPageMore } from "../projectOverview/ProjectOverview.styled";

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

    h1,
    h2,
    h4,
    h5,
    h6 {
        margin-bottom: 2rem;
        font-family: ManropeMedium;
    }

    h1 {
        font-size: 3.2rem;
        &:not(:first-child) {
            margin-top: 6rem;
        }
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2.8rem;
    }
    h4 {
        font-size: 2.6rem;
    }
    h5 {
        font-size: 2.4rem;
    }
    h6 {
        font-size: 2.2rem;
    }

    p {
        font-size: 2rem;
        margin-bottom: 3rem;

        font-family: PoppinsRegular;
        font-weight: 400;
        color: #555454;
    }

    li,
    ol {
        h6 {
            margin-bottom: 0 !important;
        }
    }

    a {
        text-decoration: none;
        color: var(--color-blue-special);
    }
`;
export const ProjectAd = styled.div`
    position: sticky;
    top: 15rem;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 25%;

    & > div:first-of-type {
        display: none;
    }

    @media only screen and (max-width: 58em) {
        position: static;
        top: 0;

        align-items: center;

        width: 100%;

        margin-bottom: 10rem;
        padding-top: 10rem;

        border-top: 2px solid #190e42;

        & > div:first-of-type {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            align-items: center;

            margin-bottom: 5rem;
        }
    }

    h1 {
        margin-bottom: 1rem;

        font-size: 3.2rem;
        font-family: ManropeMedium;

        @media only screen and (max-width: 58em) {
            text-align: center;
        }
    }

    span {
        margin-bottom: 2rem;

        font-size: 1.7rem;
        font-weight: 600;
        color: #8d8d8d;
    }

    h2 {
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
                @media (hover: hover) and (pointer: fine) {
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
`;

export const ProjectPageBtn = styled(ProjectPageMore)`
    border-bottom: 2px solid #12307c;
    color: #12307c;
    font-size: 2rem;

    margin-bottom: 1.5rem;
`;
