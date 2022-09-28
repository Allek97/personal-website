/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import { useSiteDataImages } from "../../hooks/useSiteDataImages";

import {
  ExtraPlanetImage,
  GlobeTooltip,
  Header,
  HeroArticle,
  HeroBtn,
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

  const { myGlobeImage, beyondImage, rocketImage } = useSiteDataImages();

  const toolTipMotion = {
    rest: { opacity: 0, y: "10px", scale: 0.95 },
    hover: {
      opacity: 1,
      y: "6px",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        mass: 0.5,
      },
    },
  };

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
      delay: 0.3,
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
      delay: 0,
    },
  };
  const globeMotion3D = {
    ...globeMotion2D,
    filter: "none",
  };

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
            <div>
              <HeroBtn
                aria-label="globe theme toggle"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
              >
                <motion.div
                  whileHover={globeMotion3D}
                  whileTap={globeMotion3D}
                  style={{ width: "100%", height: "auto" }}
                >
                  <motion.div
                    {...globeMotion}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <PlanetImage
                      image={myGlobeImage}
                      alt="small-globe"
                      onClick={() => {
                        window.location.reload();
                      }}
                      isgray="true"
                    />
                  </motion.div>
                </motion.div>

                <GlobeTooltip variants={toolTipMotion}>
                  Activate 3D Globe
                </GlobeTooltip>
              </HeroBtn>
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
