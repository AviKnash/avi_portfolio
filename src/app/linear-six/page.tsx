"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import { useApp } from "@/context/Application";
import Main from "./components/Main";
import DescriptionL6 from "./components/Boxes";
import Projects from "@/components/Projects";

const LinearSix = () => {
  const { pageLoading, setPageLoading } = useApp();


  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const initializeLocomotiveScroll = async () => {
      if (!scrollContainerRef.current) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        autoStart: true,
      });

      setTimeout(() => {
        setPageLoading((prev) => ({ ...prev, "linear-six": false }));
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
        {pageLoading["linear-six"] && <Preloader route="Linear Six" />}
      </AnimatePresence>
      <Main />
        <DescriptionL6 />
{/* <Projects /> */}

    </main>
  );
};

export default LinearSix;
