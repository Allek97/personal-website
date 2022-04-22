/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react";
import loadable from "@loadable/component";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";

import CodeGitVideo from "../assets/videos/codingGit.mp4";

import {
  CodingSection,
  CodingBtn,
  CodingContainer,
  DeviceContainer,
  PhoneImage,
  DashImage,
} from "../styles/indexStyles/CodingSectionStyle";

import {
  AboutSection,
  AboutContainer,
  SkillBox,
  //   ProfileImage,
} from "../styles/indexStyles/AboutSectionStyle";

import {
  ProjectSection,
  ProjectContainer,
} from "../styles/indexStyles/ProjectSectionStyle";

import { ContactSection } from "../styles/indexStyles/ContactSectionStyle";

import skills from "../constants/skills";
import basics from "../constants/basics";

import { useScreenIntersection } from "../hooks/useScreenIntersection";

import { useLoading } from "../context/LoadingContext";
import { useGlobe, useGlobeUpdate } from "../context/GlobeContext";

import { useScrollEffect } from "../hooks/useScrollEffect";
import Hero from "../components/hero/Hero";

const HomeGlobe = loadable(() => import("../components/HomeGlobe"));

// import { HomeGlobe } from "../components/HomeGlobe";

export default function Index() {
  // Gatsby Link component retaining scroll position and not resetting to top
  useEffect(() => window.scrollTo(0, 0), []);

  const loadTime = 20000;
  //   const isLoaded = useLoading();
  const isLoaded = true;
  useScrollEffect(isLoaded);

  ////////////////////////////////
  // NOTE:  ANIMATIONS
  ////////////////////////////////

  const { ref: codeInfoRef, inView: isCodeInfoInView } = useInView();

  //   // Code Section
  //   const codeContainerRef = useRef();
  //   const codePhoneRef = useRef();
  //   const codeDashRef = useRef();

  //   const codeContainerView = useScreenIntersection(
  //     codeContainerRef,
  //     -150,
  //     true,
  //     1
  //   );
  //   const codePhoneView = useScreenIntersection(codePhoneRef, -100, false, 1);
  //   const codeDashView = useScreenIntersection(codeDashRef, -100, false, 1);

  //   // About Section
  //   const aboutTextRef = useRef();
  //   const aboutStacksRef = useRef();

  //   const aboutTextView = useScreenIntersection(aboutTextRef, -150, false, 1);
  //   const aboutStacksView = useScreenIntersection(aboutStacksRef, -150, false, 1);

  //   // About Section
  //   const projectTextRef = useRef();
  //   const projectTextView = useScreenIntersection(projectTextRef, -150, false, 1);

  ////////////////////////////////
  // NOTE: SCROLL ANIMATIONS
  ////////////////////////////////

  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Seo title="Home" />
      {/* {isGlobe && <HomeGlobe />} */}
      {/* {!isLoaded && <Loading timeLoad={loadTime} />} */}
      <ContactDetails />

      <div>
        <Hero />
        {isLoaded && (
          <main>
            {/* <CodingSection>
              <CodingContainer>
                <motion.h1
                  ref={codeInfoRef}
                  initial={{ y: "200%", opacity: 0 }}
                  animate={isCodeInfoInView && { opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    mass: 0.5,
                  }}
                >
                  Always coding and working on new projects
                </motion.h1>
                <CodingBtn to="about" spy smooth offset={-70} duration={500}>
                  About me
                </CodingBtn>
                <DeviceContainer>
                  <div>
                    <PhoneImage image={phoneMockupImage} alt="Phone" />

                    <video playsInline muted loop autoPlay preload="none">
                      <source
                        src={CodeGitVideo}
                        type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                      />
                    </video>
                  </div>
                  <div>
                    <DashImage image={dashImages} alt="dashboard" />
                  </div>
                </DeviceContainer>
              </CodingContainer>
            </CodingSection> */}

            {/* <Element name="aboutSection">
              <AboutSection id="about" ref={aboutRef}>
                <AboutContainer
                  animateText={aboutTextView}
                  animateStacks={aboutStacksView}
                >
                  <div ref={aboutTextRef}>
                    <ProfileImage
                      image={profilePictureImage}
                      alt="my profile picture"
                      animateprofile={aboutTextView ? 1 : 0}
                    />
                    <h1>Ilias Allek</h1>
                    <h3>Aspiring Software Developer</h3>
                    <p>
                      I've graduated from Montreal University with a Bachelor of
                      Mathematics / minor in statistics. Before graduating, I
                      wondered about my future and what I will do next, I didn't
                      wanna pursue academics, It didn't seem fit to me. I've
                      decided that I will dedicate my time learning programming.
                      Over this time I learned building responsive websites,
                      full stack web applications based on React,Gatsby, NodeJS
                      and more. On my free time, I like to play soccer, exercice
                      and hang out with friends.
                    </p>
                  </div>
                  <div ref={aboutStacksRef}>
                    <h1>Skills</h1>
                    <SkillBox animateStacks={aboutStacksView}>
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
                    <SkillBox animateStacks={aboutStacksView}>
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
            </Element> */}

            {/* <Element name="projectSection">
              <ProjectSection id="project" ref={projectRef}>
                <ProjectContainer animateText={projectTextView}>
                  <h1 ref={projectTextRef}>Recent Projects</h1>
                  <Projects />
                </ProjectContainer>
              </ProjectSection>
            </Element>

            <Element name="contactSection">
              <ContactSection id="contact" ref={contactRef}>
                <Contact />
              </ContactSection>
            </Element> */}
          </main>
        )}
      </div>
    </>
  );
}
