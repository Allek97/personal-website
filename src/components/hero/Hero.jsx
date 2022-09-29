/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import { SiShopify } from "react-icons/si";

import { useSiteDataImages } from "../../hooks/useSiteDataImages";

import {
  ExtraPlanetImage,
  GlobeTooltip,
  Header,
  HeroArticle,
  PorjectLink,
  PlanetImage,
  Stand,
  UFOContainer,
  UFOImage,
} from "./HeroStyle";

import AnimateText from "../utils/animations/AnimateText";

const textHeader = "HELLO, I'M ILIAS. AN ASPIRING SOFTWARE DEVELOPER.";
const textSecondary =
  "I'm just a guy that enjoys programming daily and building cool stuff — Front-end design and solving problems are my favourite part. My goal is to always stand out.";

const Hero = () => {
  const homeRef = useRef();

  const { beyondImage, rocketImage } = useSiteDataImages();

  //   const toolTipMotion = {
  //     rest: {
  //       opacity: 0,
  //       y: "10px",
  //       scale: 0.95,
  //     },
  //     hover: {
  //       opacity: 1,
  //       y: "6px",
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         stiffness: 400,
  //         mass: 0.5,
  //       },
  //     },
  //   };

  const globeMotion = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
    },
  };

  const ProjectVariant = {
    initial: {
      x: "-200%",
    },
    animate: {
      x: "0%",
    },
    transition: {
      type: "just",
    },
  };

  const globeMotion2D = {
    scale: 1.1,
    filter: "brightness(1.5)",
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      bumping: 40,
    },
  };
  //   const globeMotion3D = {
  //     ...globeMotion2D,
  //     filter: "none",
  //   };

  return (
    <Element name="homeSection">
      <Header id="home" ref={homeRef}>
        <HeroArticle>
          <div style={{ width: "100%" }}>
            <AnimateText isAnimate text={textHeader} type="heading1" />
            <AnimateText
              isAnimate
              text={textSecondary}
              type="paragraph"
              staggerValue={0.01}
              version="fadeIn"
            />
            <div
              style={{
                width: "max-content",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <PorjectLink
                aria-label="globe theme toggle"
                {...ProjectVariant}
                href="https://hiempsal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  filter: "brightness(1.25)",
                  transition: {
                    duration: 0.2,
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
                  Take A Look On My Lastest App
                </motion.div>
              </PorjectLink>
              {/* <GlobeTooltip variants={toolTipMotion}>
                E-commerce Website with shopify API
              </GlobeTooltip> */}
            </div>
          </div>

          <motion.div {...globeMotion}>
            <ExtraPlanetImage image={beyondImage} alt="planet with spaceship" />
          </motion.div>
        </HeroArticle>

        <UFOContainer
          initial={{ y: "5rem", scale: 0.9, opacity: 0 }}
          animate={{ y: "0rem", scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
          }}
        >
          <UFOImage image={rocketImage} alt="Ufo" />
        </UFOContainer>

        <Stand />
      </Header>
    </Element>
  );
};

export default Hero;
