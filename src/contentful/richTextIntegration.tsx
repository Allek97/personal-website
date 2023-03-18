import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import {
    documentToReactComponents,
    Options,
} from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";

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

const LI = styled.li`
    font-size: 2rem;
    font-family: PoppinsRegular;
    font-weight: 400;
    color: #555454;
    list-style: none;
    margin-bottom: 1rem;
`;

const Img = styled(GatsbyImage)`
    width: 120%;
    margin-top: 8rem;

    @media only screen and (max-width: 65em) {
        width: 100%;
    }
`;

const Quote = styled.div`
    margin-bottom: 2rem;
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
        [BLOCKS.QUOTE]: (main) => {
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
        [BLOCKS.OL_LIST]: (_, children) => <ol>{children}</ol>,
        [BLOCKS.LIST_ITEM]: (main: any) => {
            const UnTaggedChildren = documentToReactComponents(main, {
                renderNode: {
                    [BLOCKS.LIST_ITEM]: (_, children) => <LI>{children}</LI>,
                    [BLOCKS.PARAGRAPH]: (_, children) => children,
                },
                renderMark: {
                    [MARKS.BOLD]: (text) => (
                        <h6 style={{ color: "black !important" }}>{text}</h6>
                    ),
                },
            });

            return UnTaggedChildren;
        },
        [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
            const { gatsbyImageData, description } = data.target;
            return <Img image={getImage(gatsbyImageData)!} alt={description} />;
        },
    },
};
