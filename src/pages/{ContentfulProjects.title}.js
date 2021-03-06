/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//NOTE: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import NavBar from "../components/navBar/NavBar";

import Projects from "../components/projects/Projects";
import Seo from "../components/Seo";

import ProjectOverview from "../components/projectOverview/ProjectOverview";
import ProjectContent from "../components/projectContent/ProjectContent";

import {
  ProjectPage,
  ProjectPageContent,
  ProjectPageOthers,
} from "../styles/projectPageStyles/ProjectPageStyle";

export const query = graphql`
  query getSingleProject($id: String) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
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
      resume {
        resume
      }
      used {
        used
      }
      aboutImages {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
      lesson {
        lesson
      }
      conclusion {
        conclusion
      }
    }
  }
`;

const ProjectTemplate = (props) => {
  const {
    data: { contentfulProjects },
  } = props;

  const {
    title: projectName,
    description: { description: projectDescription },
    content: {
      stacks: projectStacks,
      tags: projectTags,
      github_link: projectGithubLink,
      app_link: projectAppLink,
    },
    thumbnail: {
      gatsbyImageData,
      file: { url: projectUrl },
    },
    resume: projectResume,
    used,
    lesson,
    conclusion,
  } = contentfulProjects;

  const projectThumbnail = getImage(gatsbyImageData);

  const projectUsed = used && used.used.split("\n");
  const projectLesson = lesson && lesson.lesson.split("\n");
  const projectConclusion = conclusion && conclusion.conclusion.split("\n");

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Seo
        title={projectName}
        description={projectDescription}
        image={projectUrl}
      />

      <NavBar navColor="#102a42" />
      <ProjectPage>
        <ProjectPageContent>
          <ProjectOverview
            projectName={projectName}
            projectDescription={projectDescription}
            projectStacks={projectStacks}
            projectAppLink={projectAppLink}
            projectTags={projectTags}
            projectThumbnail={projectThumbnail}
          />

          <ProjectContent
            projectResume={projectResume}
            projectUsed={projectUsed}
            projectName={projectName}
            projectLesson={projectLesson}
            projectConclusion={projectConclusion}
            projectGithubLink={projectGithubLink}
            projectAppLink={projectAppLink}
          />

          <ProjectPageOthers>
            <h1>Other Works</h1>
            <Projects ignoreProject={projectName} />
          </ProjectPageOthers>
        </ProjectPageContent>
      </ProjectPage>
    </>
  );
};

export default ProjectTemplate;
