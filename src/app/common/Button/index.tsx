import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";
import styles from "./style.module.scss";

interface ICustomButton extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  loadingText?:string;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  backgroundColor = "#d4af37",
  loading = false,
  disabled = false,
  loadingText,
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    return () => {
      // Clean up timeout if the component unmounts
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (loading) {
      intervalId = setInterval(() => {
        setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."));
      }, 500);
    } else {
      setDots("");
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [loading]);

  const manageMouseEnter = () => {
    if (!disabled && !loading) {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeline.current?.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    if (!disabled && !loading) {
      timeoutId.current = setTimeout(() => {
        timeline.current?.play();
      }, 300);
    }
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{
          overflow: "hidden",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {loading ? <p>{loadingText}{dots}</p> : children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default CustomButton;
