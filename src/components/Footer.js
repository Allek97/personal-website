/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";

import AnimateText from "./utils/animations/AnimateText";

const Container = styled(motion.footer)`
  padding: 3.5rem 0;
  margin: 0 auto;

  background-color: var(--color-grey-main);

  color: #2b2d42;

  h1 {
    font-size: 1.95rem;
    /* line-height: 3rem; */
    font-family: Manrope;
    font-weight: 400;
    color: #2b2d42;
    text-align: center;
  }
`;

const Footer = () => {
  const { ref: footerRef, inView: isFooterInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const contentText = `© by Ilias Allek. All rights reserved.`;

  return (
    <Container ref={footerRef}>
      <AnimateText
        text={contentText}
        type="heading1"
        isAnimate={isFooterInView}
        version="fadeIn"
        staggerValue={0.02}
        letterDuration={0.3}
      />
    </Container>
  );
};

export default Footer;
