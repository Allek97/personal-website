import { ReactNode } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import {
    documentToReactComponents,
    Options,
} from "@contentful/rich-text-react-renderer";

type Children = {
    children: ReactNode;
};

const Bold = ({ children }: Children) => (
    <span className="font-bold">{children}</span>
);
const ITALIC = ({ children }: Children) => (
    <span className="italic">{children}</span>
);
const UNDERLINE = ({ children }: Children) => (
    <span className="underline">{children}</span>
);

const OL = styled.ol`
    margin-bottom: 3rem;
    margin-left: 2rem;
`;

const LI = styled.li`
    font-size: 2rem;
    font-family: PoppinsRegular;
    font-weight: 400;
    color: #555454;
    list-style: none;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    h6 {
        color: black !important;
    }
`;

const ImgCode = styled.div`
    width: 100%;
    margin-top: 2rem;
    max-height: 550px;
    overflow-x: auto;

    @media only screen and (max-width: 65em) {
        width: 100%;
    }

    h6 {
        margin-left: 3rem;
    }

    -webkit-font-smoothing: subpixel-antialiased;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
        //#226f91;
        //  -webkit-border-radius: 10px;
        //  border-radius: 10px;
        background-color: var(--color-blue-dark);
        box-shadow: inset 0 0 6px RGBA(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-thumb:window-inactive {
        background-color: var(--color-blue-dark);
    }
`;

const Img = styled(GatsbyImage)`
    width: 100%;
    margin-top: 8rem;

    @media only screen and (max-width: 65em) {
        width: 100%;
    }
`;

const Quote = styled.div`
    margin-bottom: 3rem;
    border-left: 2px solid #264b94;
    color: #12306a;
    h6 {
        margin-left: 3rem;
    }
`;

export const richTextOptions: Options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        [MARKS.ITALIC]: (text) => <ITALIC>{text}</ITALIC>,
        [MARKS.UNDERLINE]: (text) => <UNDERLINE>{text}</UNDERLINE>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
        [BLOCKS.HEADING_1]: (_, children) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (_, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_3]: (_, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (_, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (_, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (_, children) => <h6>{children}</h6>,
        [INLINES.HYPERLINK]: ({ data }, children) => (
            <a href={data.uri} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        [BLOCKS.QUOTE]: (main: any) => {
            const UnTaggedChilren = documentToReactComponents(main, {
                renderNode: {
                    [BLOCKS.PARAGRAPH]: (_, children) => (
                        <Quote>
                            <h6>{children}</h6>
                        </Quote>
                    ),
                },
            });

            return UnTaggedChilren;
        },
        [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,
        [BLOCKS.OL_LIST]: (_, children) => <OL>{children}</OL>,
        [BLOCKS.LIST_ITEM]: (main: any) => {
            const UnTaggedChildren = documentToReactComponents(main, {
                renderNode: {
                    [BLOCKS.LIST_ITEM]: (_, children) => <LI>{children}</LI>,
                    [BLOCKS.PARAGRAPH]: (_, children) => children,
                    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
                        const { gatsbyImageData, description } = data.target;
                        return (
                            <div style={{ marginBottom: "5rem" }}>
                                <p>{description}</p>
                                <ImgCode>
                                    <Zoom>
                                        <GatsbyImage
                                            image={getImage(gatsbyImageData)!}
                                            alt={description}
                                        />
                                    </Zoom>
                                </ImgCode>
                            </div>
                        );
                    },
                },
                renderMark: {
                    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
                    [MARKS.ITALIC]: (text) => <h6 className="black">{text}</h6>,
                },
            });

            return UnTaggedChildren;
        },
        [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
            const { gatsbyImageData, title } = data.target;
            return (
                <Zoom>
                    <Img image={getImage(gatsbyImageData)!} alt={title} />
                </Zoom>
            );
        },
    },
};
