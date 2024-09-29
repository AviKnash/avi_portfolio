import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import banner from '../../../../app/../public/images/linear-six.svg'
import Image from "next/image";
import {slideUp, descriptionAnimation,imageAnimation} from './animation'

const Main = () => {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
        {/* <motion.div className={styles.imageContainer} initial="initial" animate="enter" variants={imageAnimation}> */}

      <Image fill src={banner} alt="hero" />
        {/* </motion.div> */}
        <motion.div
        variants={descriptionAnimation}
        initial="initial"
        animate="enter"
        data-scroll
        data-scroll-speed={0.1}
        className={styles.description}
      >
            <h1>Software Engineer</h1>
            <p>November 2022 - May 2024</p>
      </motion.div>
    </motion.main>
  );
};

export default Main;
