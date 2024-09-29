"use client";
import React, {  useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import Hero from "@/components/Hero";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import { useApp } from "@/context/Application";

const Contact = () => {
  const { pageLoading, setPageLoading } = useApp();

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const initializeLocomotiveScroll = async () => {
      if (!scrollContainerRef.current) return; // Ensure the ref is valid

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        autoStart: true,
      });

      setTimeout(() => {

        setPageLoading((prev) => ({ ...prev, contact: false }));

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
    <main ref={scrollContainerRef} className={styles.page}>
      <AnimatePresence mode="wait">
        {pageLoading.contact && <Preloader route="Contact" />}
      </AnimatePresence>
      <Hero />
    </main>
  );
};

export default Contact;
