import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import PropTypes from "prop-types";
import { useGlobeUpdate } from "../../context/GlobeContext";

import {
  ProjectsContainer,
  ProjectBox,
  ProjectImage,
  ProjectContent,
  ProjectBtn,
  ProjectMore,
} from "./ProjectsStyle";

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

const Projects = ({ ignoreProject }) => {
  const data = useStaticQuery(query);

  const {
    allContentfulProjects: { nodes: projects },
  } = data;

  const setIsGlobe = useGlobeUpdate();

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
          const { ref: projectRef, inView: isProjectInView } = useInView({
            triggerOnce: true,
          });
          return (
            <ProjectBox
              key={project.id}
              ref={projectRef}
              initial={{ y: "50%", opacity: 0 }}
              animate={isProjectInView && { y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 8,
                mass: 0.5,
              }}
            >
              <div>
                <Link
                  to={`/${slugify(project.title, { lower: true })}`}
                  onClick={() => {
                    setIsGlobe(false);
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.25,
                      },
                    }}
                  >
                    <ProjectImage
                      image={projectThumbnail}
                      alt={`${project.title} thumbnail`}
                    />
                  </motion.div>
                </Link>
              </div>

              <ProjectContent>
                <div>
                  <h2>
                    <Link
                      to={`/${slugify(project.title, { lower: true })}`}
                      onClick={() => {
                        setIsGlobe(false);
                      }}
                      style={{ textDecoration: "none", color: "inherit" }}
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
                    to={`/${slugify(project.title, { lower: true })}`}
                    onClick={() => {
                      setIsGlobe(false);
                    }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {projectDescription}
                  </Link>
                </p>
                <div>
                  <div className="projects-stacks">
                    {projectStacks.map((stack) => {
                      return (
                        <span key={stack} id={stack}>
                          {
                            stacks.find(
                              (stackObject) => stackObject.title === stack
                            ).icon
                          }
                        </span>
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
                      to={`/${slugify(project.title, { lower: true })}`}
                      onClick={() => {
                        setIsGlobe(false);
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Learn More &#8594;
                    </ProjectMore>
                  </div>
                </div>
              </ProjectContent>
            </ProjectBox>
          );
        }
        return null;
      })}
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  // Not render a certain project
  ignoreProject: PropTypes.string,
};

Projects.defaultProps = {
  ignoreProject: "",
};

export default Projects;
