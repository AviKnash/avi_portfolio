"use client";
import React from "react";
import styles from "./style.module.scss";
import TransitionLink from "@/app/common/TransitionLink";

interface IProject {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  route: string;
}

export default function index({ index, title, manageModal, route }: IProject) {
  return (
    <TransitionLink className={styles.project} href={route}>
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.innerDiv}
      >
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>
    </TransitionLink>
  );
}
