/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
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

const Coding = () => {
  const { phoneMockupImage, dashImages } = useSiteDataImages();

  const infoControls = useAnimation();
  const contentControls = useAnimation();

  const { ref: codeInfoRef, inView: isCodeInfoInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: codeContentRef, inView: isCodeContentInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { y: "200%", opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const fadeInUpDelayed = {
    ...fadeInUp,
    visible: {
      ...fadeInUp.visible,
      transition: { ...fadeInUp.visible.transition, delay: 0.3 },
    },
  };

  const slideIn = (fromLeft) => ({
    hidden: { x: fromLeft ? "-80vw" : "80vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },
  });

  useEffect(() => {
    if (isCodeInfoInView) {
      infoControls.start("visible");
    } else {
      infoControls.start("hidden");
    }
  }, [infoControls, isCodeInfoInView]);

  useEffect(() => {
    if (isCodeContentInView) {
      contentControls.start("visible");
    } else {
      contentControls.start("hidden");
    }
  }, [contentControls, isCodeContentInView]);

  return (
    <CodingSection>
      <CodingContainer>
        <motion.h1
          ref={codeInfoRef}
          initial="hidden"
          animate={infoControls}
          variants={fadeInUp}
        >
          Always coding and working on new projects
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={infoControls}
          variants={fadeInUpDelayed}
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
            variants={slideIn(false)}
          >
            <DashImage image={dashImages} alt="dashboard" />
          </motion.div>
        </DeviceContainer>
      </CodingContainer>
    </CodingSection>
  );
};

export default Coding;
