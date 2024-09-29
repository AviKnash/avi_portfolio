import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";
import CustomButton from "@/app/common/Button";
import Magnetic from "@/app/common/Magnetic";

const data = [
  {
    description:
      "Linear Six was my first genuine step into the world of tech. The people. The culture. The ambition.",
  },
  {
    description:
      " They had it all. Truly - the place that challenged me but at the same time, let me learn the most!",
  },
];

export default function DescriptionL6() {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        {data.map((item, index) => {
          const textContainerClass =
            index % 2 === 0 ? styles.textContainer1 : styles.textContainer2;

          return (
            <div key={index} className={textContainerClass}>
              <p>
                {item.description.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className={styles.mask}>
                    <Magnetic>
                      <motion.span
                        variants={slideUp}
                        custom={wordIndex}
                        animate={isInView ? "open" : "closed"}
                      >
                        {word}
                      </motion.span>
                    </Magnetic>
                  </span>
                ))}
              </p>
            </div>
          );
        })}
        <div data-scroll data-scroll-speed={0.1}>
          <CustomButton className={styles.button}>
            <p>About me</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
