'use client';
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import { Component, useEffect, useRef, useState } from "react";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader"
import Description from "@/components/Description"
import StickyCursor from '@/components/StickyCursor';
import Footer from '@/components/Footer';
import Sliding from '@/components/Sliding';

export default function Home({}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.page}>
       <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Component />
      <StickyCursor />
      <Hero />
      <Description />
      <Projects />
      <Sliding />
      <Footer />
    </main>
  );
}
