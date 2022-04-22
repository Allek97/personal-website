import React, { useRef } from "react";
import { Element } from "react-scroll";
import basics from "../../constants/basics";
import skills from "../../constants/skills";

import { AboutContainer, AboutSection, SkillBox } from "./AboutStyle";

const About = () => {
  const aboutRef = useRef();

  return (
    <Element name="aboutSection">
      <AboutSection id="about" ref={aboutRef}>
        <AboutContainer
        //   animateText={aboutTextView}
        //   animateStacks={aboutStacksView}
        >
          <div /*ref={aboutTextRef}*/>
            {/* <ProfileImage
              image={profilePictureImage}
              alt="my profile picture"
              animateprofile={aboutTextView ? 1 : 0}
            /> */}
            <h1>Ilias Allek</h1>
            <h3>Aspiring Software Developer</h3>
            <p>
              I've graduated from Montreal University with a Bachelor of
              Mathematics / minor in statistics. Before graduating, I wondered
              about my future and what I will do next, I didn't wanna pursue
              academics, It didn't seem fit to me. I've decided that I will
              dedicate my time learning programming. Over this time I learned
              building responsive websites, full stack web applications based on
              React,Gatsby, NodeJS and more. On my free time, I like to play
              soccer, exercice and hang out with friends.
            </p>
          </div>
          <div>
            <h1>Skills</h1>
            <SkillBox>
              {skills.map((skill) => {
                return (
                  <div key={skill.id}>
                    {skill.icon}
                    <span>{skill.title}</span>
                  </div>
                );
              })}
            </SkillBox>
            <h1>Basics</h1>
            <SkillBox>
              {basics.map((basic) => {
                return (
                  <div key={basic.id} id={basic.title}>
                    {basic.icon}
                    <span>{basic.title}</span>
                  </div>
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
