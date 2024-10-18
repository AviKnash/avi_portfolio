"use client";
import React, { SetStateAction, useCallback } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

interface IProject {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setActiveProjectIndex: React.Dispatch<SetStateAction<any>>;
  setImageVisible: React.Dispatch<SetStateAction<any>>;
  imageVisible: number | null;
  activeProjectIndex: number | null;
  image: string;
  date: string;
  role: string;
  isMobile: boolean;
}

export default function Project({
  index,
  title,
  manageModal,
  onClick,
  setImageVisible,
  imageVisible,
  activeProjectIndex,
  image,
  date,
  role,
  isMobile,
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
          <div className={styles.titleWrapper}>
            {!isMobile && <motion.h2 layout="position">{title}</motion.h2>}
            <motion.h3 layout="position">{role}</motion.h3>
            {(imageVisible === index || isMobile) && (
              <motion.p layout="position">{date}</motion.p>
            )}
          </div>

          <div className={styles.dateContainer}>
            {isMobile && (
              <motion.svg
                style={{ rotate: 45, scale: 2 }}
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="white"
                />
              </motion.svg>
            )}
            {imageVisible !== index && !isMobile && (
              <motion.h2 layout="position">{date}</motion.h2>
            )}
          </div>
        </motion.div>

        {imageVisible === index && !isMobile && (
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
                src={image}
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
