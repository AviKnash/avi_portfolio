import React from "react";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";

interface ITitle {
  title?: string;
  subTitle?: string;
  id?: string;
}

const Title = ({ title, subTitle, id }: ITitle) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);

  return (
    <div id={id} ref={titleRef} className={styles.title}>
      <div className={styles.body}>
        <h1>
          {title &&
            title.split(" ").map((word, index) => {
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
        {subTitle && <h3>{subTitle}</h3>}
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
