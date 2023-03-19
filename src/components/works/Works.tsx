import {
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactFragment,
    ReactNode,
    useMemo,
} from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import { Maybe } from "@contentful/types/gatsby-contentful-types";

import {
    ProjectsContainer,
    ProjectBox,
    ProjectImage,
    ProjectContent,
    ProjectBtn,
    ProjectMore,
} from "./Works.styled";

import stacks from "../../constants/stacks";

interface ProjectProps {
    inViewOptions: IntersectionOptions;
    children: ReactNode | ReactNode[];
    isHidden?: boolean;
}

const ProjectHolder = ({
    inViewOptions,
    children,
    isHidden = false,
}: ProjectProps) => {
    const { ref: projectRef, inView: isProjectInView } =
        useInView(inViewOptions);

    return !isHidden ? (
        <ProjectBox
            ref={projectRef}
            initial={{ y: "50%", opacity: 0 }}
            animate={isProjectInView && { y: 0, opacity: 1 }}
            transition={{
                stiffness: 100,
                damping: 8,
                mass: 0.5,
            }}
        >
            {children}
        </ProjectBox>
    ) : null;
};

const query = graphql`
    {
        allContentfulProjects(sort: { fields: date, order: DESC }) {
            nodes {
                id
                title
                isFreelanceWork
                thumbnail {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
                    title
                }
                content {
                    stacks
                    tags
                    github_link
                    app_link
                }
                description {
                    description
                }
            }
        }
    }
`;

interface Props {
    ignoreProject?: Maybe<string>;
    variant: "freelance" | "project";
}

const Works = ({ ignoreProject = "", variant }: Props) => {
    // const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const isWork: boolean = useMemo(() => variant === "freelance", [variant]);

    const data = useStaticQuery(query);
    const {
        allContentfulProjects: { nodes: projects },
    } = data;

    return (
        <div>
            <ProjectsContainer>
                {projects
                    .filter(
                        (project: { isFreelanceWork: boolean }) =>
                            project.isFreelanceWork === isWork
                    )
                    .map(
                        (project: {
                            id?: any;
                            title: any;
                            thumbnail?: any;
                            content?: any;
                            description?: any;
                        }) => {
                            const {
                                title,
                                thumbnail: { gatsbyImageData },
                                content: {
                                    stacks: projectStacks,
                                    tags: projectTags,
                                    github_link: projectGithubLink,
                                    app_link: projectAppLink,
                                },
                                description: {
                                    description: projectDescription,
                                },
                            } = project;
                            const projectThumbnail = getImage(gatsbyImageData);
                            if (title !== ignoreProject) {
                                return (
                                    <ProjectHolder
                                        key={project.id}
                                        inViewOptions={{
                                            triggerOnce: true,
                                        }}
                                        isHidden={
                                            // (projectIdx === projects.length - 2 ||
                                            //     projectIdx === projects.length - 1) &&
                                            // !isExpanded
                                            false
                                        }
                                    >
                                        <div>
                                            <Link
                                                to={`/${slugify(project.title, {
                                                    lower: true,
                                                })}`}
                                            >
                                                <motion.div>
                                                    <ProjectImage
                                                        image={
                                                            projectThumbnail!
                                                        }
                                                        alt={`${project.title} thumbnail`}
                                                    />
                                                </motion.div>
                                            </Link>
                                        </div>

                                        <ProjectContent>
                                            <div>
                                                <h2>
                                                    <Link
                                                        to={`/${slugify(
                                                            project.title,
                                                            {
                                                                lower: true,
                                                            }
                                                        )}`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "inherit",
                                                            display: "block",
                                                        }}
                                                    >
                                                        {project.title}
                                                    </Link>
                                                </h2>
                                                <div>
                                                    {projectTags.map(
                                                        (
                                                            tag:
                                                                | boolean
                                                                | Key
                                                                | ReactElement<
                                                                      any,
                                                                      | string
                                                                      | JSXElementConstructor<any>
                                                                  >
                                                                | ReactFragment
                                                                | null
                                                                | undefined
                                                        ) => {
                                                            return (
                                                                <span
                                                                    key={
                                                                        tag as string
                                                                    }
                                                                >
                                                                    {tag}
                                                                </span>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            <p>
                                                <Link
                                                    to={`/${slugify(
                                                        project.title,
                                                        {
                                                            lower: true,
                                                        }
                                                    )}`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                    }}
                                                >
                                                    {projectDescription}
                                                </Link>
                                            </p>
                                            <div>
                                                <div className="projects-stacks">
                                                    {projectStacks.map(
                                                        (
                                                            stack:
                                                                | Key
                                                                | null
                                                                | undefined
                                                        ) => {
                                                            return (
                                                                stacks.find(
                                                                    (
                                                                        stackObject
                                                                    ) =>
                                                                        stackObject.title ===
                                                                        stack
                                                                )?.icon && (
                                                                    <span
                                                                        key={
                                                                            stack
                                                                        }
                                                                        id={
                                                                            stack as string
                                                                        }
                                                                    >
                                                                        {
                                                                            stacks.find(
                                                                                (
                                                                                    stackObject
                                                                                ) =>
                                                                                    stackObject.title ===
                                                                                    stack
                                                                            )
                                                                                ?.icon
                                                                        }
                                                                    </span>
                                                                )
                                                            );
                                                        }
                                                    )}
                                                </div>
                                                <div className="projects-btns">
                                                    <ProjectBtn
                                                        href={projectAppLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Live
                                                    </ProjectBtn>
                                                    <ProjectBtn
                                                        href={projectGithubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Code
                                                    </ProjectBtn>
                                                    <ProjectMore
                                                        to={`/${slugify(
                                                            project.title,
                                                            {
                                                                lower: true,
                                                            }
                                                        )}`}
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                    >
                                                        Learn More &#8594;
                                                    </ProjectMore>
                                                </div>
                                            </div>
                                        </ProjectContent>
                                    </ProjectHolder>
                                );
                            }
                            return null;
                        }
                    )}
            </ProjectsContainer>
        </div>
    );
};

export default Works;
