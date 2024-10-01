"use client";
import React, { SetStateAction, useCallback } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import some from "@/public/images/linear-six.svg";
import { motion } from "framer-motion";

interface IProject {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  route: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setActiveProjectIndex: React.Dispatch<SetStateAction<any>>;
  setImageVisible: React.Dispatch<SetStateAction<any>>;
  imageVisible: number | null;
  activeProjectIndex: number | null;
}

export default function Project({
  index,
  title,
  manageModal,
  onClick,
  setImageVisible,
  imageVisible,
  activeProjectIndex,
}: IProject) {
  const onMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      manageModal(false, index, e.clientX, e.clientY);

      if (activeProjectIndex === null) {
        setImageVisible(null);
      }
    },
    [index, activeProjectIndex]
  );

  const onMouseLeaveTitle = useCallback(() => {
    if (index === imageVisible) return;
    activeProjectIndex === null && setImageVisible(null);
  }, [index, imageVisible, activeProjectIndex]);

  const onMouseEnterTitle = useCallback(() => {
    if (index === imageVisible) return;
    activeProjectIndex === null && setImageVisible(index);
  }, [index, imageVisible, activeProjectIndex]);

  return (
    <div className={styles.project}>
      <div
        onClick={onClick}
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={onMouseLeave}
        className={styles.innerDiv}
      >
        <motion.div
          onMouseLeave={onMouseLeaveTitle}
          onMouseEnter={onMouseEnterTitle}
          className={styles.titleContainer}
          layout
        >
          <h1>{title}</h1>
          <h2>Software Engineer</h2>
        </motion.div>

        {imageVisible === index && (
            <motion.div
            onMouseLeave={onMouseLeaveTitle}
            onMouseEnter={onMouseEnterTitle}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{
                type: "ease",
                stiffness: 300,
                damping: 10,
                duration: 0.2,
            }}
            className={styles.imageContainer}
            >
            <div className={styles.innerImageContainer}>
              <Image
                src={some}
                alt="work image"
                layout="fill"
                objectFit="contain"
                />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
