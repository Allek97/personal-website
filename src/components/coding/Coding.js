import React from "react";
import { motion } from "framer-motion";
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

  const { ref: codeInfoRef, inView: isCodeInfoInView } = useInView();

  return (
    <CodingSection>
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
    </CodingSection>
  );
};

export default Coding;
