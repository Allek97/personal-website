import { ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import { ContentfulProjectObject } from "@contentful/types";

import {
    ProjectsContainer,
    ProjectBox,
    ProjectImage,
    ProjectContent,
    ProjectBtn,
    ProjectMore,
} from "./Projects.styled";

import stacks from "../../constants/stacks";

const query = graphql`
    {
        allContentfulProjects(sort: { fields: date, order: DESC }) {
            nodes {
                id
                title
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

interface ProjectProps {
    inViewOptions: IntersectionOptions;
    children: ReactNode | ReactNode[];
}

const ProjectHolder = ({ inViewOptions, children }: ProjectProps) => {
    const { ref: projectRef, inView: isProjectInView } =
        useInView(inViewOptions);

    return (
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
    );
};

interface Props {
    ignoreProject?: string;
}

const Projects = ({ ignoreProject = "" }: Props) => {
    const data = useStaticQuery<ContentfulProjectObject>(query);

    const {
        allContentfulProjects: { nodes: projects },
    } = data;

    return (
        <ProjectsContainer>
            {projects.map((project) => {
                const {
                    title,
                    thumbnail: { gatsbyImageData },
                    content: {
                        stacks: projectStacks,
                        tags: projectTags,
                        github_link: projectGithubLink,
                        app_link: projectAppLink,
                    },
                    description: { description: projectDescription },
                } = project;
                const projectThumbnail = getImage(gatsbyImageData);
                if (title !== ignoreProject) {
                    return (
                        <ProjectHolder
                            key={project.id}
                            inViewOptions={{
                                triggerOnce: true,
                            }}
                        >
                            <div>
                                <Link
                                    to={`/${slugify(project.title, {
                                        lower: true,
                                    })}`}
                                >
                                    <motion.div>
                                        <ProjectImage
                                            image={projectThumbnail!}
                                            alt={`${project.title} thumbnail`}
                                        />
                                    </motion.div>
                                </Link>
                            </div>

                            <ProjectContent>
                                <div>
                                    <h2>
                                        <Link
                                            to={`/${slugify(project.title, {
                                                lower: true,
                                            })}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                display: "block",
                                            }}
                                        >
                                            {project.title}
                                        </Link>
                                    </h2>
                                    <div>
                                        {projectTags.map((tag) => {
                                            return <span key={tag}>{tag}</span>;
                                        })}
                                    </div>
                                </div>
                                <p>
                                    <Link
                                        to={`/${slugify(project.title, {
                                            lower: true,
                                        })}`}
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
                                        {projectStacks.map((stack) => {
                                            return (
                                                stacks.find(
                                                    (stackObject) =>
                                                        stackObject.title ===
                                                        stack
                                                )?.icon && (
                                                    <span
                                                        key={stack}
                                                        id={stack}
                                                    >
                                                        {
                                                            stacks.find(
                                                                (stackObject) =>
                                                                    stackObject.title ===
                                                                    stack
                                                            )?.icon
                                                        }
                                                    </span>
                                                )
                                            );
                                        })}
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
                                            to={`/${slugify(project.title, {
                                                lower: true,
                                            })}`}
                                            whileHover={{ scale: 1.1 }}
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
            })}
        </ProjectsContainer>
    );
};

export default Projects;
