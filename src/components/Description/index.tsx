import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation"

export default function Description() {
  const phrase1 =
    "Started off creating software that operates hardware while pursuing mechantronic engineering. I've coded up eevrything from Arduino's to Rasberry Pie's. During this process of learning robotics embedded software is when I realised ->";

  const phrase2 =
    "Huh, I can spin up a server and host a website on these RasberyPii's. Oh, but I don't know how to build a website";
 const phrase3 = "And the rest was history. I fell in love with the process of building these visually appealing sites and having part's of my work on the wide net to make life easier, enterataining, educational, inspiraional - they can do it all!"
    const levelOne = useRef(null);
  const levelTwo = useRef(null);
  const levelOneInView = useInView(levelOne);
  const levelTwoInView = useInView(levelTwo);

  return (
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
  );
}
