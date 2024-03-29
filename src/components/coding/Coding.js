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

    const phoneControls = useAnimation();
    const dashControls = useAnimation();

    const { ref: codeInfoRef, inView: isCodeInfoInView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const { ref: phoneRef, inView: isPhoneInView } = useInView({
        threshold: 0.7,
        triggerOnce: true,
    });
    const { ref: dashRef, inView: isDashInView } = useInView({
        threshold: 0.7,
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
            },
        },
    };

    const slideIn = (fromLeft, delay = 0) => ({
        hidden: { x: fromLeft ? "-100vw" : "100vw" },
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
        if (isPhoneInView) {
            phoneControls.start("visible");
        } else {
            phoneControls.start("hidden");
        }
    }, [phoneControls, isPhoneInView]);
    useEffect(() => {
        if (isDashInView) {
            dashControls.start("visible");
        } else {
            dashControls.start("hidden");
        }
    }, [dashControls, isDashInView]);

    return (
        <CodingSection>
            <CodingContainer>
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
                    ref={codeInfoRef}
                    style={{
                        padding: "1.4rem 0 1.5rem",
                    }}
                >
                    <CodingBtn to="about" spy smooth duration={500}>
                        About me
                    </CodingBtn>
                </motion.div>

                <DeviceContainer>
                    <div ref={phoneRef}>
                        <motion.div
                            initial="hidden"
                            animate={phoneControls}
                            variants={slideIn(true)}
                        >
                            <PhoneImage image={phoneMockupImage} alt="Phone" />

                            <video
                                playsInline
                                muted
                                loop
                                autoPlay
                                preload="none"
                            >
                                <source
                                    src={CodeGitVideo}
                                    type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                                />
                            </video>
                        </motion.div>
                    </div>

                    <div ref={dashRef}>
                        <motion.div
                            initial="hidden"
                            animate={dashControls}
                            variants={slideIn(false, 0)}
                        >
                            <DashImage image={dashImages} alt="dashboard" />
                        </motion.div>
                    </div>
                </DeviceContainer>
            </CodingContainer>
        </CodingSection>
    );
};

export default Coding;
