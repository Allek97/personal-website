import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import basics from "../../constants/basics";
import skills from "../../constants/skills";

import AnimateText from "../utils/animations/AnimateText";

import { AboutContainer, AboutSection, SkillBox } from "./AboutStyle";

const name = "Ilias Allek";
const aspirations = "Aspiring Software Developer";
const story = `I've graduated from Montreal University with a Bachelor of 
Mathematics / minor in statistics. Before graduating, I wondered 
about my future and what I will do next, I didn't wanna pursue 
academics, It didn't seem fit to me. I've decided that I will 
dedicate my time learning programming. Over this time I learned 
building responsive websites, full stack web applications based on 
React,Gatsby, NodeJS and more. On my free time, I like to play 
soccer, exercice and hang out with friends.`;

const About = () => {
  const aboutRef = useRef();

  const { ref: nameRef, inView: isNameInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  const { ref: storyRef, inView: isStoryInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: skillRef, inView: isSkillInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: basicRef, inView: isBasicInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const skillsContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slideUpSkill = {
    hidden: {
      x: "-50%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Element name="aboutSection">
      <AboutSection id="about" ref={aboutRef}>
        <AboutContainer>
          <div>
            <AnimateText
              text={name}
              type="heading1"
              isAnimate={isNameInView}
              version="slideUp"
              staggerValue={0.02}
              letterDuration={0.6}
              refAnimation={nameRef}
            />
            <AnimateText
              text={aspirations}
              type="heading3"
              isAnimate={isNameInView}
              version="slideFade"
              staggerValue={0.02}
              delayValue={0.2}
              refAnimation={nameRef}
            />
            <AnimateText
              text={story}
              type="paragraph"
              isAnimate={isStoryInView}
              version="fadeIn"
              staggerValue={0.002}
              delayValue={0.2}
              refAnimation={storyRef}
            />
          </div>
          <div>
            <AnimateText
              text="Skills"
              type="heading1"
              isAnimate={isSkillInView}
              version="slideUp"
              staggerValue={0.025}
              letterDuration={0.5}
            />
            <SkillBox
              ref={skillRef}
              initial="hidden"
              animate={isSkillInView && "visible"}
              variants={skillsContainer}
            >
              {skills.map((skill) => {
                return (
                  <motion.div key={skill.id} variants={slideUpSkill}>
                    {skill.icon}
                    <span>{skill.title}</span>
                  </motion.div>
                );
              })}
            </SkillBox>
            <AnimateText
              text="Basics"
              type="heading1"
              isAnimate={isBasicInView}
              version="slideUp"
              staggerValue={0.025}
              letterDuration={0.5}
            />
            <SkillBox
              ref={basicRef}
              initial="hidden"
              animate={isBasicInView && "visible"}
              variants={skillsContainer}
            >
              {basics.map((basic) => {
                return (
                  <motion.div
                    key={basic.id}
                    id={basic.title}
                    variants={slideUpSkill}
                  >
                    {basic.icon}
                    <span>{basic.title}</span>
                  </motion.div>
                );
              })}
            </SkillBox>
          </div>
        </AboutContainer>
      </AboutSection>
    </Element>
  );
};

export default About;
