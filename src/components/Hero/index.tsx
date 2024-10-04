"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { slideUp } from "./animation";
import {  motion } from "framer-motion";

import Text3D from "../3DText";


const Hero = () => {
 
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [words.length]);

  const wordVariants = {
    enter: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className={styles.maskContainer}>
        <div className={styles.container3d}>
          <p>Hi, my name</p>
          <Text3D primary={"Avinash Ashok"} secondary={"Avinash Ashok"} />
          <motion.p>
            I build software for{" "}
            <motion.span
              key={index}
              variants={wordVariants}
              initial="exit"
              exit="exit"
              animate="enter"
            >
              {words[index]}
            </motion.span>
          </motion.p>
          <div className={styles.mainAbout}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/* <Text3D primary={"Ashok"} secondary={"Engineer"} /> */}
        </div>
      </div>

    </motion.main>
  );
};

export default Hero;
