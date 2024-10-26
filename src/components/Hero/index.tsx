"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { slideUp, textVariants, wordVariants } from "./animation";
import { AnimatePresence, motion } from "framer-motion";

import Text3D from "../3DText";
import Magnetic from "@/app/common/Magnetic";
import Image from "next/image";
import { openInNewTab } from "@/app/utils/functions";
import { SOCIAL_LINKS } from "@/app/constants";
import linkedin from "@/public/images/linkedin.svg";
import medium from "@/public/images/medium.svg";
import github from "@/public/images/github.svg";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMainTextHovered, setIsMainTextHovered] = useState<boolean>(false);

  const words = [
    "Financial Tech",
    "Automating Project Management",
    "Legal Tech",
    "Automating DevOps",
    "Property Tech",
    "Automating Workflows",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
      id="home"
    >
      <div className={styles.maskContainer}>
      <div className={styles.iconContainer}>
            <Magnetic>
              <div
                onClick={() => openInNewTab(SOCIAL_LINKS.github)}
                className={styles.socialIcons}
              >
                <Image fill src={github} alt="github" />
              </div>
            </Magnetic>

            <Magnetic>
              <div
                onClick={() => openInNewTab(SOCIAL_LINKS.medium)}
                className={styles.socialIcons}
              >
                <Image fill src={medium} alt="medium" />
              </div>
            </Magnetic>
            <Magnetic>
              <div
                onClick={() => openInNewTab(SOCIAL_LINKS.linkedin)}
                className={styles.socialIcons}
              >
                <Image fill src={linkedin} alt="linkedin" />
              </div>
            </Magnetic>
          </div>
        <div className={styles.container3d}>
          <AnimatePresence mode="wait">
            {isMainTextHovered ? (
              <motion.h3
                key="proficient" 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
              >
                I&apos;m proficient as a
              </motion.h3>
            ) : (
              <motion.h3
                key="name"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
              >
                Hey, my name is
              </motion.h3>
            )}
          </AnimatePresence>
          <div
            onMouseLeave={() => setIsMainTextHovered(false)}
            onMouseEnter={() => setIsMainTextHovered(true)}
            className={styles.mainName}
          >
            <Text3D primary={"Avinash Ashok"} secondary={"Software Engineer"} />
          </div>
          <motion.h3>
            I&apos;ve built software for{" "}
            <motion.span
              key={index}
              variants={wordVariants}
              initial="exit"
              exit="exit"
              animate="enter"
            >
              {words[index]}
            </motion.span>
          </motion.h3>
          <div className={styles.mainAbout}>
            <p>
              I am a full-stack developer with over several years of experience
              working with a wide range of technologies across multiple domains.
            </p>
          </div>
        </div>


      </div>
    </motion.main>
  );
};

export default Hero;
