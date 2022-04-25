/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AnimateLetters from "./AnimateLetters";

const AnimateText = ({
  isAnimate,
  type,
  text,
  staggerValue,
  delayValue,
  version,
  letterDuration,
  refAnimation,
  // eslint-disable-next-line react/prop-types
}) => {
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
        delayChildren: delayValue ?? 0,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isAnimate && "visible"}
      variants={container}
      ref={refAnimation}
      style={{ width: "100%" }}
    >
      <div>
        {placeholderText.map((item, index) => {
          return (
            <AnimateLetters
              {...item}
              key={index}
              version={version}
              letterDuration={letterDuration}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

AnimateText.propTypes = {
  isAnimate: PropTypes.bool.isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(["paragraph", "heading1", "heading2", "heading3"]),
  version: PropTypes.oneOf(["slideUp", "fadeIn", "slideFade"]),
  staggerValue: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  refAnimation: PropTypes.oneOfType([
    PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  delayValue: PropTypes.number,
  letterDuration: PropTypes.number,
};

AnimateText.defaultProps = {
  text: "",
  type: "heading1",
  staggerValue: 0.025,
  version: "slideUp",
  delayValue: 0,
  letterDuration: 0.2,
};

export default AnimateText;
