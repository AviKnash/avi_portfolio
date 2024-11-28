"use client";
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Description from "@/components/Description";
import { useApp } from "@/context/Application";
import Title from "@/components/Title";
import Works from "@/components/Works";
import Technologies from "@/components/Technologies";

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

  useEffect(() => {
    const hero = scrollContainerRef.current;
    if (!hero) return;

    let rafId: number | null = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animateSpotlight = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);

      hero.style.setProperty("--x", `${currentX}px`);
      hero.style.setProperty("--y", `${currentY}px`);

      rafId = requestAnimationFrame(animateSpotlight);
    }

    //Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateSpotlight);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main
      ref={scrollContainerRef}
      className={`${styles.page} ${styles.hoverEffect}`}
    >
      <AnimatePresence mode="wait">
        {pageLoading.home && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Title
        id="about"
        title="About Me"
        subTitle="A quick dive into who I am"
      />

      <Description />

      <Title
        id="experience"
        subTitle="I am the culmintation of the work I've done"
        title="Experience"
      />
      <Works />
      <Title
        id="projects"
        subTitle="I work on a lot of random stuff. These are a few of the one's I'm half proud of."
        title="Projects"
      />
      <Projects />
      <Title
        title="Technologies"
        subTitle="The tools under my belt so far..."
      />
      <Technologies />
    </main>
  );
}
