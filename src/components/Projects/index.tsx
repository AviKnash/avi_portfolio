"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import CustomButton from "@/app/common/Button";
import Project from "./components/project";
import cloud from "../../public/images/cloud-ops.svg";
import proptech from "../../public/images/proptech.svg";
import headphones from "../../public/images/headphones.svg";
import TransitionLink from "@/app/common/TransitionLink";
import { listVariants, opacity } from "./animations";

const projects = [
  {
    title: "Linear Six",
    route: "/linear-six",
    src: cloud,
    color: "#000000",
    descriptionLists: [
      [
        "Designed, implemented, and developed a project time tracker/reporting service application to replace Clockify.",
        "Leveraged AWS services to implement efficient hosting, CI/CD, log tracking, and data handling.",
        "Engaged in Agile-style development using Scrum project management methodologies.",
        "Implemented best practices in software development, including secure version management and comprehensive testing (unit, regression, and integration tests), ensuring maintainability and scalability.",
      ],
    ],
    descriptionTitles: [
      "Worked on Bespoke team for internal development, contributing to LinearSix by:",
    ],
  },
  {
    title: "Insighture",
    route: "/insighture",
    src: proptech,
    color: "#8C8C8C",
    descriptionLists: [
      [
        "Worked on fixing synchronization issues between the audio obtained and the received text from Azure Cognitive Services to ensure correct playback for audio-to-text detection in an enterprise application, resulting in a 2-4 second improvement in audio-to-text synchronization for remote meetings.",
        "Refactored code to streamline integration and resolve existing bugs, drastically increasing efficiency and reliability.",
        "Performed thorough regression testing to ensure the application remains in a working state.",
      ],
      [
        "Led the front-end development of a high-priority feature aimed at automating the digitization of property leasing and rental forms.",
        "Managed a frontend team by efficiently delegating non-blocking tasks and architecting the project to accommodate team members' code, improving collaboration, efficiency, and resulting in early delivery of key milestones.",
        "Identified performance bottlenecks and implemented Next.js best practices to optimize not only the newly developed feature but also improve the performance of existing integrated features.",
      ],
      [
        "Building and developing backend AI services using Python and FastAPI, including AI Swagger spec generation and reverse DNS look-up.",
        "Integrated HashiCorp Vault into SkyU's secret management service for secure client secret management, resulting in a smooth client onboarding process.",
      ],
    ],
    descriptionTitles: [
      "Worked on the project team focusing on RegTech and contributing by:",
      "Worked on the project team focusing on PropTech and contributed by:",
      "Worked on the product team building a SaaS application and contributing by:",
    ],
  },
  {
    title: "Zoral",
    route: "/zoral",
    src: headphones,
    color: "#EFE8D3",
    descriptionLists: [
      [
        "Spearheading a major project to automate loan and leasing services for a leading Malaysian bank, leveraging Zoral's AI engine.",
        "Designing and implemented solutions pertaining to Credit Policy Scope, incorporating innovative design solutions and workflows. These solutions and designs resulted in a 20%-30% reduction on expected time for UAT.",
        "Leveraged Zoral's extension data warehouse to build highly scalable and reusable backend services that were templatized for use in other projects.",
        "Collaborating seamlessly with the frontend and UI/UX teams, enabling communication and contributing to screens and backend integrations.",
        "Taking an active role in the recruitment process, including designing take-home plans and leading interviews for new developers joining the team.",
      ],
    ],
    descriptionTitles: ["Contributed to Zoral by:"],
  },
];

const subItems = ["Sub Item 1", "Sub Item 2", "Sub Item 3"];

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
        {projects.map((project, index) => {
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
            {projects.map((project, index) => {
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
