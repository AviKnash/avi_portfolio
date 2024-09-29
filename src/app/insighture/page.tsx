"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import { useScroll, useTransform, motion } from "framer-motion";
import Hero from "@/components/Hero";
import { useApp } from "@/context/Application";

const LinearSix = () => {
  const { pageLoading, setPageLoading } = useApp();
  const projectRef = useRef(null);
  const testRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: testRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const initializeLocomotiveScroll = async () => {
      if (!scrollContainerRef.current) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        autoStart: true,
      });

      setTimeout(() => {
        setPageLoading((prev) => ({ ...prev, insighture: false }));
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);

      return () => {
        locomotiveScroll.destroy();
      };
    };

    initializeLocomotiveScroll();
  }, []);

  return (
    <main ref={scrollContainerRef}>
      <AnimatePresence mode="wait">
        {pageLoading.insighture && <Preloader route="Insighture" />}
      </AnimatePresence>
      <Hero />
      <div ref={projectRef}>
        <Projects />
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div ref={testRef} className={styles.circle}></div>
      </motion.div>
    </main>
  );
};

export default LinearSix;
