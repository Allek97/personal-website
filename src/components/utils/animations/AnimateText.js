/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AnimateLetters from "./AnimateLetters";

const AnimateText = ({ isAnimate, type, text, staggerValue, version }) => {
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: type,
      text: text,
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: staggerValue,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isAnimate && "visible"}
      variants={container}
    >
      <div>
        {placeholderText.map((item, index) => {
          return <AnimateLetters {...item} key={index} version={version} />;
        })}
      </div>
    </motion.div>
  );
};

AnimateText.propTypes = {
  isAnimate: PropTypes.bool.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(["paragraph", "heading1", "heading2"]),
  version: PropTypes.oneOf(["slideUp", "fadeIn", "slideFade"]),
  staggerValue: PropTypes.number,
};

AnimateText.defaultProps = {
  text: "",
  type: "heading1",
  staggerValue: 0.025,
  version: "slideUp",
};

export default AnimateText;
