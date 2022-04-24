/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import { useGlobe, useGlobeUpdate } from "../../context/GlobeContext";
import { useSiteDataImages } from "../../hooks/useSiteDataImages";
import { useLoading } from "../../context/LoadingContext";

import {
  ExtraPlanetImage,
  GlobeCanvas,
  GlobeContainer,
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

  //   const isGlobe = useGlobeUpdate();
  const isGlobe = true;
  const setIsGlobe = useGlobeUpdate();

  //   const isLoaded = useLoading();
  const isLoaded = true;

  const { beyondGlobeImage, myGlobeImage, beyondImage, rocketImage } =
    useSiteDataImages();

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
    animate: isLoaded && {
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
          {isLoaded && (
            <div style={{ width: "100%" }}>
              <AnimateText
                isAnimate={isLoaded}
                text={textSecondary}
                type="paragraph"
                staggerValue={0.01}
                version="fadeIn"
              />
              <AnimateText
                isAnimate={isLoaded}
                text={textHeader}
                type="heading1"
              />

              <div>
                <HeroBtn
                  aria-label="globe theme toggle"
                  initial="rest"
                  whileHover="hover"
                  whileTap="hover"
                >
                  {isGlobe ? (
                    <>
                      <motion.div
                        whileHover={globeMotion2D}
                        whileTap={globeMotion2D}
                        style={{ width: "100%", height: "auto" }}
                        onClick={() => {
                          setIsGlobe(false);
                        }}
                      >
                        <motion.div
                          {...globeMotion}
                          style={{ width: "100%", height: "auto" }}
                        >
                          <PlanetImage
                            image={beyondGlobeImage}
                            alt="small-planet"
                          />
                        </motion.div>
                      </motion.div>
                      <GlobeTooltip variants={toolTipMotion}>
                        Activate 2D Image
                      </GlobeTooltip>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </HeroBtn>
              </div>
            </div>
          )}
          {!isGlobe ? (
            <GlobeContainer>
              <GlobeCanvas {...globeMotion} id="globe_canvas" />
            </GlobeContainer>
          ) : (
            <motion.div {...globeMotion}>
              <ExtraPlanetImage
                image={beyondImage}
                alt="planet with spaceship"
              />
            </motion.div>
          )}
        </HeroArticle>
        {isLoaded && (
          <>
            <UFOContainer
              initial={{ y: "5rem", scale: 0.9, opacity: 0 }}
              animate={isLoaded && { y: "0rem", scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
            >
              <UFOImage image={rocketImage} alt="Ufo" />
            </UFOContainer>

            <Stand />
          </>
        )}
      </Header>
    </Element>
  );
};

export default Hero;
