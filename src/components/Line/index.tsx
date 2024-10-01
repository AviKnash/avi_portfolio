"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const Line = () => {
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;
  const path = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    path.current &&
      path.current.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { movementY, clientX } = e;

    if (path.current) {
      const pathBound = path.current.getBoundingClientRect();
      x = (clientX - pathBound.left) / pathBound.width;
    }
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className={styles.line}>
      <div
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        className={styles.box}
      ></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
};

export default Line;
