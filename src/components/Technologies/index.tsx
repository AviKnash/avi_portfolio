"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import { technologies, technologiesTwo } from "@/app/constants";
import Magnetic from "@/app/common/Magnetic";
import Tooltip from "./components/Tooltip";

const Technologies = () => {
  const firstLine = useRef(null);
  const [visibleTooltip, setVisibleTooltip] = useState<number | null>(null);
  const [visibleTooltipTwo, setVisibleTooltipTwo] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  const showTooltip = (index: number) => {
    setVisibleTooltip(index);
  };

  const hideTooltip = () => {
    setVisibleTooltip(null);
  };

  const showTooltipTwo = (index: number) => {
    setVisibleTooltipTwo(index);
  };

  const hideTooltipTwo = () => {
    setVisibleTooltipTwo(null);
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
                    onMouseEnter={() => showTooltipTwo(index)}
                    onMouseLeave={hideTooltipTwo}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltipTwo === index && (
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
                    onMouseEnter={() => showTooltipTwo(index)}
                    onMouseLeave={hideTooltipTwo}
                  >
                    <Image
                      className={styles.image}
                      src={tech.src}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                    {visibleTooltipTwo === index && (
                      <Tooltip content={tech.name} />
                    )}
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      {!isMobile && <motion.div style={{ height: "10px" }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>}
      </motion.div>
    </motion.main>
  );
};

export default Technologies;
