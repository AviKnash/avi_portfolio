"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../..//app/common/Button";
import { useLayoutEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../..//app/common/Magnetic";
import background from "../../public/images/myself.png";
import Input from "@/app/common/Input";
import instagram from "@/public/images/instagram.svg";
import linkedin from "@/public/images/linkedin.svg";
import medium from "@/public/images/medium.svg";
import github from "@/public/images/github.svg";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  const validateForm = () => {
    let formIsValid = true;
    let errors = { name: "", email: "", message: "" };

    if (!name) {
      errors.name = "Please enter your name";
      formIsValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Please enter your email";
      formIsValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address";
      formIsValid = false;
    }

    if (!message) {
      errors.message = "Please enter your message";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit the form (e.g., send data to an API)
      alert("Form submitted successfully!");
    }
  };

  return (
    <motion.div
      id="contact"
      style={{ y }}
      ref={container}
      className={styles.contact}
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={background} />
            </div>
            <h2>Let&apos;s work together</h2>
          </span>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.contactBox}>
            <div className={styles.numberBox}>
              <p>01</p>
            </div>
            <div className={styles.inputBox}>
              <h3>What&apos;s your name?</h3>
              <Input
                placeholder="Sylvester Cat"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.numberBox}>
              <p>02</p>
            </div>
            <div className={styles.inputBox}>
              <h3>What&apos;s your email?</h3>
              <Input
                placeholder="mail@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.numberBox}>
              <p>03</p>
            </div>
            <div className={styles.inputBox}>
              <h3>Your message</h3>
              <Input
                isTextArea
                rows={1}
                cols={isMobile ? 25 : 40}
                placeholder="Hey Avinash, I'd like to ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Input>
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <Rounded onClick={handleSubmit}>
            <p>Send it!</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
          </div>
          <div>
            <Magnetic>
              <div className={styles.socialIcons}>
                <Image fill src={github} alt="github" />
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.socialIcons}>
                <Image fill src={instagram} alt="instagram" />
              </div>
            </Magnetic>

            <Magnetic>
              <div className={styles.socialIcons}>
                <Image fill src={medium} alt="medium" />
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.socialIcons}>
                <Image fill src={linkedin} alt="linkedin" />
              </div>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
