"use client";
import React, { SetStateAction } from "react";
import styles from "./style.module.scss";

interface IProject {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  route: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setActiveProjectIndex: React.Dispatch<SetStateAction<any>>;
}

export default function Project({
  index,
  title,
  manageModal,
  onClick,
  setActiveProjectIndex,
}: IProject) {
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    manageModal(false, index, e.clientX, e.clientY);
    setActiveProjectIndex(null);
  };

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
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>
    </div>
  );
}
