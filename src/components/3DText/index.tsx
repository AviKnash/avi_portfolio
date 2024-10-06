"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";

interface Text3D {
  primary: string;
  secondary: string;
}

export default function Text3D({ primary, secondary }: Text3D) {
  const text1 = useRef(null);
  const text2 = useRef(null);

  return (
    <div className={styles.textContainer}>
      <h1 className={styles.primary} ref={text1}>
        {primary}
      </h1>
      <h1 className={styles.secondary} ref={text2}>
        {secondary}
      </h1>
    </div>
  );
}
