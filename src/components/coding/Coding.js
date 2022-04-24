/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  CodingBtn,
  CodingContainer,
  CodingSection,
  DashImage,
  DeviceContainer,
  PhoneImage,
} from "./CodingStyle";

import CodeGitVideo from "../../assets/videos/codingGit.mp4";
import { useSiteDataImages } from "../../hooks/useSiteDataImages";
import AnimateText from "../utils/animations/AnimateText";

const headerText = "Always coding and working on new projects";

const Coding = () => {
  const { phoneMockupImage, dashImages } = useSiteDataImages();

  const contentControls = useAnimation();

  const { ref: codeInfoRef, inView: isCodeInfoInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  const { ref: codeContentRef, inView: isCodeContentInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animateCodeInfo = useMemo(() => isCodeInfoInView, [isCodeInfoInView]);

  const fadeInUp = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "grayscale(0)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
        opacity: {
          ease: [1, 0.54, 1, 0.27],
        },
        delay: 0.3,
      },
    },
  };

  const slideIn = (fromLeft, delay = 0) => ({
    hidden: { x: fromLeft ? "-80vw" : "80vw" },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      },
    },
  });

  useEffect(() => {
    if (isCodeContentInView) {
      contentControls.start("visible");
    } else {
      contentControls.start("hidden");
    }
  }, [contentControls, isCodeContentInView]);

  return (
    <CodingSection>
      <CodingContainer ref={codeInfoRef}>
        <AnimateText
          text={headerText}
          type="heading1"
          isAnimate={animateCodeInfo}
          version="slideFade"
          staggerValue={0.02}
        />
        <motion.div
          initial="hidden"
          animate={animateCodeInfo && "visible"}
          variants={fadeInUp}
          style={{ padding: "1.4rem 0 1.5rem" }}
        >
          <CodingBtn to="about" spy smooth offset={-70} duration={500}>
            About me
          </CodingBtn>
        </motion.div>

        <DeviceContainer ref={codeContentRef}>
          <motion.div
            initial="hidden"
            animate={contentControls}
            variants={slideIn(true)}
          >
            <PhoneImage image={phoneMockupImage} alt="Phone" />

            <video playsInline muted loop autoPlay preload="none">
              <source
                src={CodeGitVideo}
                type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
              />
            </video>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={contentControls}
            variants={slideIn(false, 0.2)}
          >
            <DashImage image={dashImages} alt="dashboard" />
          </motion.div>
        </DeviceContainer>
      </CodingContainer>
    </CodingSection>
  );
};

export default Coding;
