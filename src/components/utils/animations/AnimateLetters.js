/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

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

const AnimateLetters = ({ type = "heading1", text = "", version }) => {
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

  // NOTE Used for small font paragraphs
  const fadeInItem = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
    },
  };
  // NOTE Used for small font paragraphs
  const slideFadeItem = {
    hidden: {
      opacity: 0,
      y: "0.2em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.15,
      },
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
      case "slideFade":
        return slideFadeItem;
      default:
        return slideUpItem;
    }
  };

  return (
    <Tag>
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

AnimateLetters.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["paragraph", "heading1", "heading2"]),
  version: PropTypes.oneOf(["slideUp", "fadeIn", "slideFade"]),
};

AnimateLetters.defaultProps = {
  text: "",
  type: "heading1",
  version: "slideUp",
};

export default AnimateLetters;
