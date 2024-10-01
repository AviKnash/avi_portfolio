"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Project from "./components/project";

import { listVariants, opacity } from "./animations";
import { experience } from "@/app/constants";


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

  const xMoveContainer = useRef<((value: number) => void) | null>(null);
  const yMoveContainer = useRef<((value: number) => void) | null>(null);
  const xMoveCursor = useRef<((value: number) => void) | null>(null);
  const yMoveCursor = useRef<((value: number) => void) | null>(null);
  const xMoveCursorLabel = useRef<((value: number) => void) | null>(null);
  const yMoveCursorLabel = useRef<((value: number) => void) | null>(null);

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
      className={styles.projects}
    >
      <div className={styles.body}>
        {experience.map((project, index) => {
          return (
            <div className={styles.projectContainer}>
              <Project
                onClick={handleModalClick}
                setActiveProjectIndex={setActiveProjectIndex}
                index={index}
                title={project.title}
                route={project.route}
                manageModal={manageModal}
                key={index}
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
                          <li key={titleIndex}>
                            <strong>{descriptionTitle}</strong>
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
      {/* <CustomButton>
        <p>More work</p>
      </CustomButton> */}
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {experience.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  {/* <Image src={src} width={300} height={0} alt="image" /> */}
                </div>
              );
            })}
          </div>
        </motion.div>

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
          View
        </motion.div>
      </>
    </main>
  );
};

export default Projects;
