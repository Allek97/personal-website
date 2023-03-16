import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import {
    documentToReactComponents,
    Options,
} from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => (
    <span className="font-weight-bold">{children}</span>
);
const ITALIC = ({ children }) => (
    <span className="font-weight-italic">{children}</span>
);
const UNDERLINE = ({ children }) => (
    <span style={{ textDecoration: "underline" }}>{children}</span>
);

const richTextOptions = (assets = {}): Options => {
    return {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
            [MARKS.ITALIC]: (text) => <ITALIC>{text}</ITALIC>,
            [MARKS.UNDERLINE]: (text) => <UNDERLINE>{text}</UNDERLINE>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
            [BLOCKS.HEADING_1]: (_, children) => (
                <h1 style={{ color: "#999" }}>{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (_, children) => (
                <h2 style={{ color: "#999" }}>{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (_, children) => (
                <h3 style={{ color: "#999" }}>{children}</h3>
            ),
            [BLOCKS.HEADING_4]: (_, children) => (
                <h4 style={{ color: "#999" }}>{children}</h4>
            ),
            [BLOCKS.HEADING_5]: (_, children) => (
                <h5 style={{ color: "#999" }}>{children}</h5>
            ),
            [BLOCKS.HEADING_6]: (_, children) => (
                <h6 style={{ color: "#999" }}>{children}</h6>
            ),
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <a href={data.uri} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            ),
            [BLOCKS.QUOTE]: (_, children) => (
                <div className="tp-p-details-quote">
                    <p>{children}</p>
                </div>
            ),
            [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,
            [BLOCKS.OL_LIST]: (node) => {
                const UnTaggedChildren = documentToReactComponents(node, {
                    renderNode: {
                        [BLOCKS.LIST_ITEM]: (_, children) => {
                            return children;
                        },
                        [BLOCKS.OL_LIST]: (_, children) => {
                            return children;
                        },
                        [BLOCKS.EMBEDDED_ASSET]: (node) => {
                            const image = assets.find(
                                (asset) =>
                                    asset.sys.id === node.data.target.sys.id
                            );
                            return (
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="tp-p-details-img">
                                        <img
                                            src={image?.url}
                                            alt={
                                                image?.description ??
                                                image?.title
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        },
                    },
                });

                return <div className="row">{UnTaggedChildren}</div>;
            },
            [BLOCKS.LIST_ITEM]: (node) => {
                const UnTaggedChildren = documentToReactComponents(node, {
                    renderNode: {
                        [BLOCKS.PARAGRAPH]: (_, children) => children,
                        [BLOCKS.LIST_ITEM]: (_, children) => children,
                        [BLOCKS.HEADING_1]: (_, children) => (
                            <h1 style={{ color: "#999" }}>{children}</h1>
                        ),
                        [BLOCKS.HEADING_2]: (_, children) => (
                            <h2 style={{ color: "#999" }}>{children}</h2>
                        ),
                        [BLOCKS.HEADING_3]: (_, children) => (
                            <h3 style={{ color: "#999" }}>{children}</h3>
                        ),
                        [BLOCKS.HEADING_4]: (_, children) => (
                            <h4 style={{ color: "#999" }}>{children}</h4>
                        ),
                        [BLOCKS.HEADING_5]: (_, children) => (
                            <h5 style={{ color: "#999" }}>{children}</h5>
                        ),
                        [BLOCKS.HEADING_6]: (_, children) => (
                            <h6 style={{ color: "#999" }}>{children}</h6>
                        ),
                        [INLINES.HYPERLINK]: ({ data }, children) => (
                            <a
                                href={data.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {children}
                            </a>
                        ),
                        [BLOCKS.EMBEDDED_ASSET]: (node) => {
                            const image = assets.find(
                                (asset) =>
                                    asset.sys.id === node.data.target.sys.id
                            );
                            return (
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="tp-p-details-img">
                                        <img
                                            src={image?.url}
                                            alt={
                                                image?.description ??
                                                image?.title
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        },
                    },
                });

                return <li>{UnTaggedChildren}</li>;
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const image = assets.find(
                    (asset) => asset.sys.id === node.data.target.sys.id
                );
                return (
                    <div className="tp-p-details-img">
                        <img
                            src={image?.url}
                            alt={image?.description ?? image?.title}
                        />
                    </div>
                );
            },
        },
    };
};

export { richTextOptions };
