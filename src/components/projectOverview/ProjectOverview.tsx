/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { IGatsbyImageData } from "gatsby-plugin-image";
import AnimateText from "../utils/animations/AnimateText";

import stacks from "../../constants/stacks";

import {
    ProjectPageImage,
    ProjectPageMore,
    ProjectPageOverview,
} from "./ProjectOverview.styled";

interface Props {
    projectName: string;
    projectDescription: string;
    projectStacks: string[];
    projectAppLink: string;
    projectTags: string[];
    projectThumbnail: IGatsbyImageData;
}

const ProjectOverview = ({
    projectName,
    projectDescription,
    projectStacks,
    projectAppLink,
    projectTags,
    projectThumbnail,
}: Props) => {
    const stacksContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const tagsContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const slideStack = {
        hidden: {
            x: "-50%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };
    const fadeUp = {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };
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

                <motion.div
                    className="projectPage-stacks"
                    initial="hidden"
                    animate="visible"
                    variants={stacksContainer}
                >
                    {projectStacks.map((stack) => {
                        return (
                            stacks.find(
                                (stackObject) => stackObject.title === stack
                            )?.icon && (
                                <motion.span
                                    key={stack}
                                    id={stack}
                                    variants={slideStack}
                                >
                                    {
                                        stacks.find(
                                            (stackObject) =>
                                                stackObject.title === stack
                                        )?.icon
                                    }
                                </motion.span>
                            )
                        );
                    })}
                </motion.div>
                <motion.div
                    className="projectPage-tags"
                    initial="hidden"
                    animate="visible"
                    variants={tagsContainer}
                >
                    {projectTags.map((tag) => {
                        return (
                            <motion.span variants={fadeUp} key={tag}>
                                {tag}
                            </motion.span>
                        );
                    })}
                </motion.div>
                <ProjectPageMore
                    href={projectAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    animate="visible"
                    transition={{ visible: { delay: 0.4 } }}
                    variants={fadeUp}
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            ease: "easeInOut",
                            duration: 0.2,
                            delay: 0,
                        },
                    }}
                >
                    View the site
                </ProjectPageMore>
            </article>

            {/* <ProjectPageImage initial="hidden" animate="visible" variants={fadeUp}>
          </ProjectPageImage> */}
            <ProjectPageImage
                image={projectThumbnail}
                alt={`${projectName} thumbnail`}
            />
        </ProjectPageOverview>
    );
};

export default ProjectOverview;
