import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useGlobe, useGlobeUpdate } from "../../context/GlobeContext";
import NavBar from "../navBar/NavBar";
import {
  ExtraPlanetImage,
  GlobeCanvas,
  GlobeContainer,
  Header,
  HeroArticle,
  HeroBtn,
  PlanetImage,
  Stand,
  UFOImage,
} from "./HeroStyle";
import { useSiteDataImages } from "../../hooks/useSiteDataImages";

const Hero = () => {
  const homeRef = useRef();

  const isGlobe = useGlobe();
  const setIsGlobe = useGlobeUpdate();

  //   const isLoaded = useLoading();
  const isLoaded = true;

  const { beyondGlobeImage, myGlobeImage, beyondImage, rocketImage } =
    useSiteDataImages();
  return (
    <Element name="homeSection">
      <Header id="home" ref={homeRef}>
        {isLoaded && <NavBar navColor="white" />}
        <HeroArticle>
          {isLoaded && (
            <div>
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeIn",
                }}
              >
                Hello, I'm Ilias. An aspiring software developer.
              </motion.h1>
              <motion.h3
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeIn",
                }}
              >
                I'm just a guy that enjoys programming daily and building cool
                stuff — Front-end design and solving problems are my favourite
                part. My goal is to always stand out.
              </motion.h3>
              <div>
                <HeroBtn>
                  {isGlobe ? (
                    <PlanetImage
                      image={beyondGlobeImage}
                      alt="small-planet"
                      onClick={() => {
                        setIsGlobe(false);
                      }}
                    />
                  ) : (
                    <PlanetImage
                      image={myGlobeImage}
                      alt="small-globe"
                      onClick={() => {
                        window.location.reload();
                      }}
                      isgray="true"
                    />
                  )}
                </HeroBtn>
              </div>
            </div>
          )}
          {isGlobe ? (
            <GlobeContainer>
              <GlobeCanvas id="globe_canvas" />
            </GlobeContainer>
          ) : (
            <ExtraPlanetImage image={beyondImage} alt="planet with spaceship" />
          )}
        </HeroArticle>
        {isLoaded && (
          <>
            <UFOImage image={rocketImage} alt="Ufo" />
            <Stand />
          </>
        )}
      </Header>
    </Element>
  );
};

export default Hero;
