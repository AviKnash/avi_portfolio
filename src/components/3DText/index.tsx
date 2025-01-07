"use client";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence

interface Text3D {
  primary: string;
  secondary: string;
}

export default function Text3D({ primary, secondary }: Text3D) {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const [showPointer, setShowPointer] = useState(true);

  const pointerAnimation = {
    animate: {
      x: [-5, 5, -5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div onMouseEnter={() => setShowPointer(false)} className={styles.textContainer}>
      <h1 className={styles.primary} ref={text1}>
        {primary}
      </h1>
      <h1 className={styles.secondary} ref={text2}>
        {secondary}
      </h1>
      <AnimatePresence>
        {showPointer && (
          <motion.svg
            style={{ rotate: 90, scale: 2 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            width="15"
            height="15"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={pointerAnimation}
            animate="animate"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}