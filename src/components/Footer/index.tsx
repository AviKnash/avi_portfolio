"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../..//app/common/Button";
import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../..//app/common/Magnetic";
import background from "../../public/images/myself.png";
import Input from "@/app/common/Input";
import instagram from "@/public/images/instagram.svg";
import linkedin from "@/public/images/linkedin.svg";
import medium from "@/public/images/medium.svg";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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

          {/* <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div> */}
          {/* <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg> */}
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
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.numberBox}>
              <p>03</p>
            </div>
            <div className={styles.inputBox}>
              <h3>What&apos;s your email?</h3>
              <Input
                placeholder="mail@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
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
                cols={40}
                placeholder="Hey Avinash, I'd like to ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Input>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <Rounded>
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
