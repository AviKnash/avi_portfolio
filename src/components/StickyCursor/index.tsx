"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";
import { useRootRef } from "@/context/StickyRef/index";

export default function StickyCursor() {
  const cursor = useRef(null);
  const stickyElement = useRootRef();
//   console.log(JSON.stringify(stickyElement))
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 100, mass: 1 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any): void => {
    const { clientX, clientY } = e;

    //move custom cursor to center of stickyElement
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = () => {
    console.log("HEREEEE")
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    if (stickyElement.current) {
      stickyElement.current.addEventListener("mouseover", manageMouseOver);
      stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);

      if (stickyElement.current) {
        stickyElement.current.removeEventListener("mouseover", manageMouseOver);
        stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      }
    };
  }, []);
  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
        ref={cursor}
      ></motion.div>
    </div>
  );
}
