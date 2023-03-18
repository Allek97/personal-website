/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//NOTE: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import { useEffect } from "react";
import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import {
    ContentfulAssetConnection,
    ContentfulProjects,
} from "@contentful/types/gatsby-contentful-types";
import NavBar from "../components/navBar/NavBar";

import { Works } from "../components/works";
import Seo from "../components/Seo";

import ProjectOverview from "../components/projectOverview/ProjectOverview";
import ProjectContent from "../components/projectContent/ProjectContent";

import {
    ProjectPage,
    ProjectPageContent,
    ProjectPageOthers,
} from "../styles/projectPageStyles/ProjectPageStyle";

export const contentfulProjectPageQuery = graphql`
    query getSingleProject($id: String) {
        contentfulProjects(id: { eq: $id }) {
            id
            title
            core {
                raw
            }
            content {
                tags
                stacks
                github_link
                app_link
            }
            description {
                description
            }
            thumbnail {
                gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
                file {
                    url
                }
            }
        }
        assets: allContentfulAsset {
            nodes {
                id
                gatsbyImageData
            }
        }
    }
`;

type DataProps = {
    contentfulProjects: ContentfulProjects;
    assets: ContentfulAssetConnection;
};

const ProjectTemplate = ({
    data: { contentfulProjects, assets },
}: PageProps<DataProps>) => {
    const {
        title: projectName,
        description,
        content,
        thumbnail,
        core,
    } = contentfulProjects;

    const { description: projectDescription } = description || {};
    const {
        stacks: projectStacks,
        tags: projectTags,
        github_link: projectGithubLink,
        app_link: projectAppLink,
    } = { ...content };
    const { gatsbyImageData, file } = { ...thumbnail };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const projectThumbnail = getImage(gatsbyImageData)!;

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <Seo
                title={projectName}
                description={projectDescription}
                image={file?.url ?? ""}
            />

            <NavBar navColor="#102a42" />
            <ProjectPage>
                <ProjectPageContent>
                    <ProjectOverview
                        projectName={projectName}
                        projectDescription={projectDescription ?? ""}
                        projectStacks={projectStacks ?? []}
                        projectAppLink={projectAppLink ?? ""}
                        projectTags={projectTags ?? []}
                        projectThumbnail={projectThumbnail}
                    />

                    <ProjectContent
                        projectName={projectName}
                        projectGithubLink={projectGithubLink}
                        projectAppLink={projectAppLink}
                        assets={assets}
                        core={core}
                    />

                    <ProjectPageOthers>
                        <h1>Other Works</h1>
                        <Works
                            variant="freelance"
                            ignoreProject={projectName}
                        />
                    </ProjectPageOthers>
                </ProjectPageContent>
            </ProjectPage>
        </>
    );
};

export default ProjectTemplate;
