/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//NOTE: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import moment from "moment";

import NavBar from "../components/navBar/NavBar";
import ContentfulAbout from "../components/ContentfulAbout";
import Projects from "../components/projects/Projects";
import Seo from "../components/Seo";

import {
  ProjectPage,
  ProjectPageContent,
  ProjectPageImage,
  ProjectPageOverview,
  ProjectPageMore,
  ProjectPageStory,
  ProjectPageOthers,
  ProjectPageBtn,
} from "../styles/projectPageStyles/ProjectPageStyle";

import stacks from "../constants/stacks";
import socials from "../constants/socials";
import { useScreenIntersection } from "../hooks/useScreenIntersection";

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

  ////////////////////////////////
  // NOTE: SCROLL ANIMATIONS
  ////////////////////////////////

  const projectOverviewRef = useRef();
  const projectOverviewView = useScreenIntersection(
    projectOverviewRef,
    -150,
    true,
    10
  );

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
          <ProjectPageOverview
            ref={projectOverviewRef}
            animateOverview={projectOverviewView}
          >
            <article className="projectPage-overview-content">
              <h1>{projectName}</h1>
              <p>{projectDescription}</p>
              <div>
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
              <div>
                {projectTags.map((tag) => {
                  return <span key={tag}>{tag}</span>;
                })}
              </div>
              <ProjectPageMore
                href={projectAppLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the site
              </ProjectPageMore>
            </article>
            <ProjectPageImage
              image={projectThumbnail}
              alt={`${projectName} thumbnail`}
            />
          </ProjectPageOverview>

          <ProjectPageStory>
            <div>
              <h1>What I made 💁‍♂️</h1>
              <p>{projectResume && projectResume.resume}</p>
              <h1>What I used 🔷</h1>

              <div className="projectPage-used">
                {projectUsed &&
                  projectUsed.map((el, idx) => {
                    if (idx % 2 === 0) {
                      return <h3 key={el}>{el}</h3>;
                    }
                    return <p key={el}>{el}</p>;
                  })}
              </div>

              <h1>About this production 🥳</h1>

              <div>
                <ContentfulAbout title={projectName} />
              </div>

              <h1>What I learned ✅</h1>

              <div className="projectPage-lesson">
                {projectLesson &&
                  projectLesson.map((el, idx) => {
                    if (idx % 2 === 0) {
                      return <p key={el}>{el}</p>;
                    }
                    return null;
                  })}
              </div>

              <h1>Finally 😎</h1>

              <div className="projectPage-conclusion">
                {projectConclusion &&
                  projectConclusion.map((el, idx) => {
                    if (idx % 2 === 0) {
                      return <p key={el}>{el}</p>;
                    }
                    return null;
                  })}
              </div>
            </div>

            <div>
              <h1>{projectName}</h1>
              <span>{moment().format("MMM Do, YYYY")}</span>

              <ProjectPageBtn
                href={projectAppLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the site
              </ProjectPageBtn>

              <ProjectPageBtn
                href={projectGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </ProjectPageBtn>
              <h2>Share</h2>
              <h3>If you like this work, please share.</h3>
              <ul>
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </ul>
            </div>
          </ProjectPageStory>
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
