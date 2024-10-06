"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import styles from "./style.module.scss";
import { technologies, technologiesTwo } from "@/app/constants";
import Magnetic from "@/app/common/Magnetic";
import { ScrollTrigger } from "gsap/all";
import Tooltip from "./components/Tooltip";

const Technologies = () => {
  const firstLine = useRef(null);
  const [visibleTooltip, setVisibleTooltip] = useState<number | null>(null);


  const showTooltip = (index: number) => {
    setVisibleTooltip(index);
  };

  const hideTooltip = () => {
    setVisibleTooltip(null);
  };


  return (
    <motion.main initial="initial" animate="enter" className={styles.techMain}>
      <motion.div className={styles.body}>

        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologies.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                  <div
                    className={styles.imageWrapper}
                    onMouseEnter={() => showTooltip(index)}
                    onMouseLeave={hideTooltip}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltip === index && (
                      <Tooltip content={tech.name} />
                    )}
                  </div>
                 </Magnetic>
               
              ))}
            </div>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologies.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                  <div
                    className={styles.imageWrapper}
                    onMouseEnter={() => showTooltip(index)}
                    onMouseLeave={hideTooltip}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltip === index && (
                      <Tooltip content={tech.name} />
                    )}
                  </div>
                  
                 </Magnetic>
              ))}
            </div>
          </div>
          
        </div>
        <div className={styles.sliderContainerTwo}>
          <div className={styles.slider}>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologiesTwo.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                   <div
                    className={styles.imageWrapper}
                    onMouseEnter={() => showTooltip(index)}
                    onMouseLeave={hideTooltip}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltip === index && (
                      <Tooltip content={tech.name} />
                    )}
                  </div>
                  
                 </Magnetic>
              ))}
            </div>
            <div ref={firstLine} className={styles.imageContainer}>
              {technologiesTwo.map((tech, index) => (
                <Magnetic key={`first-${index}`}>
                  <div
                    className={styles.imageWrapper}
                    onMouseEnter={() => showTooltip(index)}
                    onMouseLeave={hideTooltip}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltip === index && (
                      <Tooltip content={tech.name} />
                    )}
                  </div>
                  
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