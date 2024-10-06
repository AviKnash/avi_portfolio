"use client";
import React from "react";
import styles from "./style.module.scss";

interface IProject {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  href: string;
  subTitle: string;
}

export default function Project({
  index,
  title,
  manageModal,
  href,
  subTitle
}: IProject) {

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    manageModal(false, index, e.clientX, e.clientY);
  };

  const onClick = () => {
    window.open(href, "_blank");
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
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
