/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import stacks from "../../constants/stacks";
import AnimateText from "../utils/animations/AnimateText";
import {
  ProjectPageImage,
  ProjectPageMore,
  ProjectPageOverview,
} from "./ProjectOverviewStyle";

const ProjectOverview = ({
  projectName,
  projectDescription,
  projectStacks,
  projectAppLink,
  projectTags,
  projectThumbnail,
}) => {
  return (
    <ProjectPageOverview>
      <article className="projectPage-overview-content">
        <AnimateText
          text={projectName}
          type="heading1"
          version="slideUp"
          staggerValue={0.04}
          letterDuration={0.7}
        />
        <AnimateText
          text={projectDescription}
          type="paragraph"
          version="fadeIn"
          staggerValue={0.002}
          delayValue={0.2}
        />

        <motion.div className="projectPage-stacks">
          {projectStacks.map((stack) => {
            return (
              <span key={stack} id={stack}>
                {stacks.find((stackObject) => stackObject.title === stack).icon}
              </span>
            );
          })}
        </motion.div>
        <div className="projectPage-tags">
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
  );
};

export default ProjectOverview;
