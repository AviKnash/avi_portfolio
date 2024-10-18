import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { slideUp } from "./animation";

export default function Description() {
  const phrase1 =
    "I began my journey in technology by developing software that interfaces with hardware while pursuing a degree in Mechatronic Engineering. From coding for Arduinos to working with Raspberry Pis, I immersed myself in the world of robotics and embedded software. It was during this process that I had a thought:";

  const phrase2 =
    "Wait a minute, I can set up a server and host a website on these Raspberry Pis. But how do I actually build a website?";
  const phrase3 =
    "That curiosity sparked a passion that has driven my career ever since. I fell in love with crafting robust, scalable and functional applications that not only showcase my work but also enrich lives by making information more accessible, simplifying everyday mundabe tasks and inspiring creativity. Working with teams of people that strive for this same thing is what makes doing what I do worth all the hours.";
  const levelOne = useRef(null);
  const levelTwo = useRef(null);
  const levelOneInView = useInView(levelOne);
  const levelTwoInView = useInView(levelTwo);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileDescription}>
          <ul>
            <li>
              <p>{phrase1}</p>
            </li>
            <li>
              <p>{phrase2}</p>
            </li>
            <li>
              <p>{phrase3}</p>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.description}>
          <div className={styles.body}>
            <div ref={levelOne} className={styles.levelOne}>
              <div className={styles.aboutContainer}>
                <p>
                  {phrase1.split(" ").map((word, index) => {
                    return (
                      <span key={index} className={styles.mask}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={levelOneInView ? "open" : "closed"}
                          key={index}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </p>
              </div>
              <div
                className={styles.scrollingContainerOne}
                data-scroll
                data-scroll-speed={0.1}
              >
                <p>{phrase2}</p>
              </div>
            </div>
            <div ref={levelTwo} className={styles.levelTwo}>
              <div
                data-scroll
                data-scroll-speed={0.1}
                className={styles.scrollingContainerTwo}
              >
                <p>
                  {phrase3.split(" ").map((word, index) => {
                    return (
                      <span key={index} className={styles.mask}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={levelTwoInView ? "open" : "closed"}
                          key={index}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className={styles.normalContainerTwo}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
