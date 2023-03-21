/* eslint-disable react/jsx-props-no-spreading */
import { MutableRefObject, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Element } from "react-scroll";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

import { SiShopify } from "react-icons/si";
import { useSiteDataImages } from "../../hooks/useSiteDataImages";

import {
    ExtraPlanetImage,
    Header,
    HeroArticle,
    ProjectLink,
    Stand,
} from "./Hero.styled";

import AnimateText from "../utils/animations/AnimateText";

const textHeader = "HELLO, I'M ILIAS. A DEDICATED SOFTWARE DEVELOPER.";
const textSecondary = `I'm just a guy that enjoys programming daily and building cool stuff — 
Front-end design and solving problems are my favourite part. My goal is to always stand out and deliver on my tasks.`;

const Hero = () => {
    const homeRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { ref: primaryTextRef, inView: isPrimaryTextInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const { ref: secondaryTextRef, inView: isSecondaryTextInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const { beyondImage } = useSiteDataImages();

    const globeMotion = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 30,
            },
        },
    };

    const ProjectVariant: Variants = {
        initial: {
            x: "-200%",
        },
        animate: {
            x: "0%",
            transition: {
                ease: "easeInOut",
                duration: 0.45,
            },
        },
    };

    return (
        <Element name="homeSection">
            <Header id="home" ref={homeRef}>
                <HeroArticle>
                    <div style={{ width: "100%" }}>
                        <AnimateText
                            text={textHeader}
                            type="heading1"
                            isAnimate={isPrimaryTextInView}
                            refAnimation={primaryTextRef}
                        />
                        <AnimateText
                            text={textSecondary}
                            type="paragraph"
                            staggerValue={0.01}
                            version="fadeIn"
                            isAnimate={isSecondaryTextInView}
                            refAnimation={secondaryTextRef}
                        />
                        <div
                            style={{
                                width: "max-content",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <ProjectLink
                                aria-label="Link to my startup"
                                {...ProjectVariant}
                                href="https://hiempsal.ca"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    filter: "brightness(1.25)",
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    },
                                }}
                            >
                                <motion.div
                                    //   {...globeMotion}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                >
                                    <SiShopify
                                        style={{
                                            width: "2.3rem",
                                            height: "2.3rem",
                                            marginRight: "1rem",
                                        }}
                                    />
                                    Take A Look On My Lastest Work
                                </motion.div>
                            </ProjectLink>
                        </div>
                    </div>

                    <motion.div {...globeMotion}>
                        <ExtraPlanetImage
                            image={beyondImage as IGatsbyImageData}
                            alt="planet with spaceship"
                        />
                    </motion.div>
                </HeroArticle>

                <Stand />
            </Header>
        </Element>
    );
};

export default Hero;
