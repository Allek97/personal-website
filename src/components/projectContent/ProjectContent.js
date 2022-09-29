/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import ContentfulAbout from "../ContentfulAbout";
import {
  Content,
  ProjectAd,
  ProjectPageBtn,
  ProjectPageStory,
} from "./ProjectContentStyle";
import socials from "../../constants/socials";

const ProjectContent = ({
  projectResume,
  projectUsed,
  projectName,
  projectLesson,
  projectConclusion,
  projectGithubLink,
  projectAppLink,
}) => {
  return (
    <ProjectPageStory>
      <Content>
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

        {projectName !== "Hiempsal Shopify E-commerce" && (
          <h1>About this production 🥳</h1>
        )}

        <div>
          <ContentfulAbout title={projectName} />
        </div>

        {projectLesson && <h1>What I learned ✅</h1>}

        {projectLesson && (
          <div className="projectPage-lesson">
            {projectLesson.map((el, idx) => {
              if (idx % 2 === 0) {
                return <p key={el}>{el}</p>;
              }
              return null;
            })}
          </div>
        )}

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
      </Content>

      <ProjectAd>
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
      </ProjectAd>
    </ProjectPageStory>
  );
};

export default ProjectContent;
