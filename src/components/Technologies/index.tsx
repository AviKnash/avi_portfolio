import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import styles from "./style.module.scss";
import { technologies } from "@/app/constants";
import Magnetic from "@/app/common/Magnetic";
import { ScrollTrigger } from "gsap/all";

const Technologies = () => {
  const firstLine = useRef(null);



  return (
    <motion.main initial="initial" animate="enter" className={styles.techMain}>
      <motion.div className={styles.body}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologies.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                  <Image
                  key={`first-${index}`}
                    className={styles.image}
                    src={tech.src}
                    width={100}
                    height={100}
                    alt={tech.name}
                  />
                  
                 </Magnetic>
              ))}
            </div>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologies.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                  <Image
                  key={`first-${index}`}
                    className={styles.image}
                    src={tech.src}
                    width={100}
                    height={100}
                    alt={tech.name}
                  />
                  
                 </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Technologies;