import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateText from "../utils/animations/AnimateText";

import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ResumeLink,
  ContactBtn,
  NameSvg,
  EmailSvg,
  MessageAreaSvg,
} from "./ContactStyle";

const Contact = () => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);

  const handleEmailValidity = (email) => {
    // don't remember from where i copied this code, but this works.
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const { ref: contactRef, inView: isContactInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const { ref: formRef, inView: isFormInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const fadeInUp = (delay) => ({
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
        opacity: {
          ease: [1, 0.54, 1, 0.27],
        },
        delay: delay,
      },
    },
  });

  const fadeUp = (delay) => ({
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.75,
        delay: delay,
      },
    },
  });

  return (
    <ContactContainer>
      <div ref={contactRef}>
        <AnimateText
          text="Contact details:"
          type="heading1"
          isAnimate={isContactInView}
          version="slideUp"
          staggerValue={0.02}
          letterDuration={0.6}
        />
        <AnimateText
          text="iliasallek.aek@gmail.com"
          type="heading3"
          isAnimate={isContactInView}
          version="fadeIn"
          staggerValue={0.04}
          letterDuration={0.6}
          delayValue={0.2}
        />
        <AnimateText
          text="For employers:"
          type="heading1"
          isAnimate={isContactInView}
          version="slideUp"
          staggerValue={0.02}
          letterDuration={0.6}
          delayValue={0.4}
        />

        <ResumeLink
          initial="hidden"
          animate={isContactInView && "visible"}
          variants={fadeInUp(0.6)}
          whileHover={{
            backgroundColor: "var(--color-blue-dark)",
            transition: {
              duration: 0.2,
            },
          }}
          style={{ alignSelf: "flex-start" }}
          href="Ilias_Allek_SWE_Resume_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          alt="my resume in english"
          download
        >
          DOWNLOAD CV
        </ResumeLink>
        <ResumeLink
          initial="hidden"
          animate={isContactInView && "visible"}
          variants={fadeInUp(0.8)}
          whileHover={{
            backgroundColor: "var(--color-blue-dark)",
            transition: {
              duration: 0.2,
            },
          }}
          style={{ alignSelf: "flex-start" }}
          href="Ilias_Allek_SWE_Resume_FR.pdf"
          target="_blank"
          rel="noopener noreferrer"
          alt="my resume in french"
          download
        >
          TÉLÉCHARGER CV
        </ResumeLink>
      </div>
      <div ref={formRef}>
        <AnimateText
          text="Say Hello"
          type="heading1"
          isAnimate={isFormInView}
          version="slideUp"
          staggerValue={0.02}
          letterDuration={0.6}
        />
        <div>
          <ContactForm action="https://formspree.io/f/xvoddwlj" method="POST">
            <div>
              <motion.div
                initial="hidden"
                animate={isFormInView && "visible"}
                variants={fadeUp()}
              >
                <ContactInput
                  id="name-input"
                  name="name"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value.length >= 2) {
                      setIsNameValid(true);
                    } else {
                      setIsNameValid(false);
                    }
                  }}
                  required
                />
                <NameSvg isvalid={isNameValid ? 1 : 0} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={isFormInView && "visible"}
                variants={fadeUp(0.2)}
              >
                <ContactInput
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder="what's your email?"
                  onChange={(e) => {
                    handleEmailValidity(e.target.value);
                  }}
                  required
                />
                <EmailSvg isvalid={isEmailValid ? 1 : 0} />
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate={isFormInView && "visible"}
              variants={fadeUp(0.4)}
            >
              <ContactTextArea
                id="input-message"
                spellCheck="false"
                onChange={(e) => {
                  const { value } = e.target;
                  if (value.length >= 3) {
                    setIsTextValid(true);
                  } else {
                    setIsTextValid(false);
                  }
                }}
                required
              />
              <MessageAreaSvg isvalid={isTextValid ? 1 : 0} />
            </motion.div>
            <ContactBtn
              initial="hidden"
              animate={isFormInView && "visible"}
              variants={fadeInUp(0.6)}
              whileHover={{
                backgroundColor: "var(--color-blue-dark)",
                transition: {
                  duration: 0.2,
                },
              }}
              type="submit"
            >
              SUBMIT
            </ContactBtn>
          </ContactForm>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
