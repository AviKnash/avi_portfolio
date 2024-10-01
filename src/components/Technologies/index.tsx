"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { technologies } from "@/app/constants";
import Image from "next/image";

interface ICircle {
  //   id: number;
  top: number;
  left: number;
  size: number;
  name: string;
  src: string;
}

const Technologies = () => {
  return (
    <motion.main initial="initial" animate="enter" className={styles.techMain}>
      <motion.div className={styles.body}>
        {technologies.map((circle) => (
          <motion.div
            key={circle.name}
            className={styles.circle}
            style={{
              top: `${circle.top}vh`,
              left: `${circle.left}vw`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <Image
              src={circle.src}
              layout="fill"
              objectFit="contain"
              alt="circle"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Technologies;
