"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./Navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../app/common/Button";
import Magnetic from "../../app/common/Magnetic";
import Link from "next/link";
import { ScrollToPlugin } from "gsap/all";

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target.offsetTop, autoKill: false },
        duration: 1, // Adjust duration for scroll speed
        ease: "power1.out",
      });
    }
  };

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>⩜⃝</p>
          <div className={styles.name}>
            <Link href="/" className={styles.codeBy}>Modelled by</Link>
            <Link href="/" className={styles.avi}>Avi</Link>
            <Link href="/" className={styles.ashok}>nash Ashok</Link>
          </div>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a role="button" className={styles.transitionLink} onClick={()=>handleScrollTo("experience")} >
                Experience
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a role="button" className={styles.transitionLink} onClick={()=>handleScrollTo("projects")} >
                Projects
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={()=>handleScrollTo("about")} className={styles.transitionLink}>
                About
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a className={styles.transitionLink} role="button" onClick={()=>handleScrollTo("contact")}>
                Contact
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav handleScrollTo={handleScrollTo} />}</AnimatePresence>
    </>
  );
}
