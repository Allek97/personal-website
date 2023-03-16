/* eslint-disable jsx-a11y/media-has-caption */
import { MutableRefObject, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

import { Works } from "../components/works";
import NavBar from "../components/navBar/NavBar";

import Contact from "../components/contact/Contact";
import ContactDetails from "../components/ContactDetails";
import Seo from "../components/Seo";

import {
    ProjectSection,
    ProjectContainer,
} from "../styles/indexStyles/ProjectSection.styled";

import { ContactSection } from "../styles/indexStyles/ContactSectionStyle";

import { useScrollEffect } from "../hooks/useScrollEffect";
import Hero from "../components/hero/Hero";
import Coding from "../components/coding/Coding";
import About from "../components/about/About";
import AnimateText from "../components/utils/animations/AnimateText";

export default function Index() {
    // Gatsby Link component retaining scroll position and not resetting to top
    useEffect(() => window.scrollTo(0, 0), []);

    useScrollEffect(true);

    ////////////////////////////////
    // NOTE: SCROLL ANIMATIONS
    ////////////////////////////////

    const freelanceRef = useRef() as MutableRefObject<HTMLDivElement>;
    const projectRef = useRef() as MutableRefObject<HTMLDivElement>;
    const contactRef = useRef() as MutableRefObject<HTMLDivElement>;

    ////////////////////////////////
    // NOTE: Animations
    ////////////////////////////////

    const { ref: freelanceHeaderRef, inView: isFreelanceInView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const { ref: projectHeaderRef, inView: isProjectInView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    return (
        <>
            <Seo title="Home" />

            <ContactDetails />
            <NavBar navColor="white" />
            <div>
                <Hero />
                <main>
                    <Coding />
                    <About />

                    <Element name="freelanceSection">
                        <ProjectSection id="freelance" ref={freelanceRef}>
                            <ProjectContainer>
                                <AnimateText
                                    text="Freelance Work"
                                    type="heading1"
                                    isAnimate={isFreelanceInView}
                                    version="slideUp"
                                    staggerValue={0.025}
                                    letterDuration={0.5}
                                    refAnimation={freelanceHeaderRef}
                                />
                                <Works variant="freelance" />
                            </ProjectContainer>
                        </ProjectSection>
                    </Element>

                    <Element name="projectSection">
                        <ProjectSection id="project" ref={projectRef}>
                            <ProjectContainer>
                                <AnimateText
                                    text="Personal Projects"
                                    type="heading1"
                                    isAnimate={isProjectInView}
                                    version="slideUp"
                                    staggerValue={0.025}
                                    letterDuration={0.5}
                                    refAnimation={projectHeaderRef}
                                />
                                <Works variant="project" />
                            </ProjectContainer>
                        </ProjectSection>
                    </Element>

                    <Element name="contactSection">
                        <ContactSection id="contact" ref={contactRef}>
                            <Contact />
                        </ContactSection>
                    </Element>
                </main>
            </div>
        </>
    );
}
