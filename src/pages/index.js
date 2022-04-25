/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react";
import loadable from "@loadable/component";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";

import {
  ProjectSection,
  ProjectContainer,
} from "../styles/indexStyles/ProjectSectionStyle";

import { ContactSection } from "../styles/indexStyles/ContactSectionStyle";

import { useLoading } from "../context/LoadingContext";

import { useScrollEffect } from "../hooks/useScrollEffect";
import Hero from "../components/hero/Hero";
import Coding from "../components/coding/Coding";
import About from "../components/about/About";
import AnimateText from "../components/utils/animations/AnimateText";
import { useGlobe } from "../context/GlobeContext";

const HomeGlobe = loadable(() => import("../components/HomeGlobe"));

// import { HomeGlobe } from "../components/HomeGlobe";

export default function Index() {
  // Gatsby Link component retaining scroll position and not resetting to top
  useEffect(() => window.scrollTo(0, 0), []);

  const isGlobe = useGlobe();

  const loadTime = 20000;
  //   const isLoaded = useLoading();
  const isLoaded = true;
  useScrollEffect(isLoaded);

  ////////////////////////////////
  // NOTE: SCROLL ANIMATIONS
  ////////////////////////////////

  const projectRef = useRef();
  const contactRef = useRef();

  ////////////////////////////////
  // NOTE: Animations
  ////////////////////////////////

  const { ref: projectHeaderRef, inView: isProjectInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <>
      <Seo title="Home" />
      {/* {isGlobe && <HomeGlobe />}
      {!isLoaded && <Loading timeLoad={loadTime} />} */}
      {isLoaded && <ContactDetails />}
      {isLoaded && <NavBar navColor="white" />}
      <div>
        <Hero />
        {isLoaded && (
          <main>
            <Coding />
            <About />

            <Element name="projectSection">
              <ProjectSection id="project" ref={projectRef}>
                <ProjectContainer>
                  <AnimateText
                    text="Recent Projects"
                    type="heading1"
                    isAnimate={isProjectInView}
                    version="slideUp"
                    staggerValue={0.025}
                    letterDuration={0.5}
                    refAnimation={projectHeaderRef}
                  />
                  <Projects />
                </ProjectContainer>
              </ProjectSection>
            </Element>

            <Element name="contactSection">
              <ContactSection id="contact" ref={contactRef}>
                <Contact />
              </ContactSection>
            </Element>
          </main>
        )}
      </div>
    </>
  );
}
