"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import gsap from "gsap";
import Work from "./components/work";

import { listVariants, opacity } from "./animations";
import { experience } from "@/app/constants";
import Image from "next/image";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null
  );
  const [imageVisible, setImageVisible] = useState<number | null>(null);

  const xMoveContainer = useRef<((value: number) => void) | null>(null);
  const yMoveContainer = useRef<((value: number) => void) | null>(null);
  const xMoveCursor = useRef<((value: number) => void) | null>(null);
  const yMoveCursor = useRef<((value: number) => void) | null>(null);
  const xMoveCursorLabel = useRef<((value: number) => void) | null>(null);
  const yMoveCursorLabel = useRef<((value: number) => void) | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setActiveProjectIndex((prevIndex) => (prevIndex === index ? null : index));
    setImageVisible(index);
    manageModal(false, index, e.clientX, e.clientY);
  };

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current?.(x);
    yMoveContainer.current?.(y);
    xMoveCursor.current?.(x);
    yMoveCursor.current?.(y);
    xMoveCursorLabel.current?.(x);
    yMoveCursorLabel.current?.(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.works}
    >
      <div className={styles.body}>
        {experience.map((project, index) => {
          return (
            <div className={styles.workContainer}>
              {isMobile && 
               <div className={styles.mobileImageContainer}>
               <Image
                 src={project.src}
                 alt="work image"
                 layout="fill"
                 objectFit="contain"
                 />
             </div>}
              <Work
                onClick={handleModalClick}
                setActiveProjectIndex={setActiveProjectIndex}
                index={index}
                title={project.title}
                manageModal={manageModal}
                key={index}
                setImageVisible={setImageVisible}
                imageVisible={imageVisible}
                activeProjectIndex={activeProjectIndex}
                image={project.src}
                date={project.date}
                role={project.role}
                isMobile={isMobile}
              />
              <AnimatePresence mode="wait">
                {activeProjectIndex === index && (
                  <motion.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={listVariants}
                    className={styles.subItems}
                  >
                    <ul>
                      {project.descriptionTitles.map(
                        (descriptionTitle, titleIndex) => (
                          <li className={styles.subTitle} key={titleIndex}>
                            <strong className={styles.titleStrong}>
                              {descriptionTitle}
                            </strong>
                            <ul>
                              {project.descriptionLists[titleIndex].map(
                                (descriptionItem, subIndex) => (
                                  <motion.li
                                    variants={opacity}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    key={subIndex}
                                  >
                                    {descriptionItem}
                                  </motion.li>
                                )
                              )}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
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
        </motion.div>
      </>
    </main>
  );
};

export default Projects;
