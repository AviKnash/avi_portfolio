import React from "react";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);

  return (
    <div ref={titleRef} className={styles.title}>
      <div className={styles.body}>
        <h1>
          {title.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>
        <motion.div
          className={styles.underline}
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Title;
