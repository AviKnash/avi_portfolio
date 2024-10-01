"use client";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Description from "@/components/Description";
import Sliding from "@/components/Sliding";
import { useApp } from "@/context/Application";
import Title from "@/components/Title";
import Works from "@/components/Works";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { pageLoading, setPageLoading } = useApp();

  useEffect(() => {
    const initializeLocomotiveScroll = async () => {
      if (!scrollContainerRef.current) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        autoStart: true,
      });

      setTimeout(() => {
        setPageLoading((prev) => ({ ...prev, home: false }));
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
        {pageLoading.home && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Title title="Experience" />
      <Projects />
      <Title title="Projects" />
      <Works />
      {/* <Sliding /> */}
    </main>
  );
}
