"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { slideUp, textVariants, wordVariants } from "./animation";
import { AnimatePresence, motion } from "framer-motion";

import Text3D from "../3DText";

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
    }, 2000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
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
        <div className={styles.container3d}>
          <AnimatePresence mode="wait">
            {isMainTextHovered ? (
              <motion.h3
                key="proficient" // Unique key to animate between text changes
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
              >
                I'm proficient as a
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
            I've built software for{" "}
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
              I am a full-stack developer with over 2 years of experience
              working with a wide range of technologies across multiple domains.
            </p>
          </div>
          {/* <Text3D primary={"Ashok"} secondary={"Engineer"} /> */}
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
