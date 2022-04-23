/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { motion } from "framer-motion";
import { useLoading } from "../../../context/LoadingContext";
import AnimatedText from "../../utils/AnimateText";

const AnimatedHeader = () => {
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "heading1",
      text: "Hello, I'm Ilias. An aspiring software developer.",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // const isLoaded = useLoading();
  const isLoaded = true;

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded && "visible"}
      variants={container}
    >
      <div>
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedHeader;
