/* eslint-disable react/no-array-index-key */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  return (
    <span className="animated-text-wrapper" style={{ whiteSpace: "nowrap" }}>
      {children}
    </span>
  );
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedText = ({ type = "heading1", text = "", version }) => {
  // NOTE Used for big headers
  const slideUpItem = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
    },
  };

  // NOTE Used for big headers
  const fadeInItem = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const splitWords = text.split(" ");

  const words = [];

  [...splitWords].forEach((word) => words.push(word.split("")));

  words.map((word) => word.push("\u00A0"));

  const Tag = tagMap[type];

  const animationVariant = () => {
    switch (version) {
      case "fadeIn":
        return fadeInItem;
      case "slideUp":
        return slideUpItem;
      default:
        return slideUpItem;
    }
  };

  return (
    <Tag style={{ lineHeight: "1", marginTop: "3px", fontWeight: 500 }}>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {word.flat().map((element, elementIdx) => {
              return (
                <span
                  style={{ display: "inline-block", overflow: "hidden" }}
                  key={elementIdx}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={animationVariant()}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  version: PropTypes.oneOf(["slideUp", "fadeIn"]),
};

AnimatedText.defaultProps = {
  text: "",
  type: "heading1",
  version: "slideUp",
};

export default AnimatedText;
