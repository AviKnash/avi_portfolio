"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import styles from "./style.module.scss";
import { slideUp } from "./animation";
import { backOut, motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const firstText2 = useRef(null);
  const secondText2 = useRef(null);
  const slider2 = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  let xPercent = 0;
  let direction = -1;
  const size = isHovered ? 1000 : 40;

  const { x, y } = useMousePosition();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -0.5),
      },
      x: "-500px",
    });

    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -0.5),
      },
      x: "-500px",
    });

    if (
      firstText.current &&
      secondText.current &&
      firstText2.current &&
      secondText2.current
    )
      requestAnimationFrame(animate);
  }, []);

  //Create animation to move the text in the x axis
  const animate = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(firstText2.current, { xPercent: xPercent });
    gsap.set(secondText2.current, { xPercent: xPercent });

    if (
      firstText.current &&
      secondText.current &&
      secondText2.current &&
      firstText.current
    )
      requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: backOut }}
        className={styles.mask}
      >
        <motion.div className={styles.sliderContainer}>
          <div
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            ref={slider}
            className={styles.slider}
          >
            <p style={{ color: "black" }} ref={firstText}>
              I'm part software engineer. Part fooling around __
            </p>
            <p style={{ color: "black" }} ref={secondText}>
              I'm part software engineer. Part fooling around __
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className={styles.innerDiv}>
        <div className={styles.sliderContainer}>
          <div ref={slider2} className={styles.slider}>
            <p ref={firstText2}>Welcome to my abode! I'm Avinash __</p>
            <p ref={secondText2}>Welcome to my abode! I'm Avinash __</p>
          </div>
        </div>
      </div>
      {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div> */}
    </motion.main>
  );
};

export default Hero;
