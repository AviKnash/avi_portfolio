import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import { SetStateAction } from "react";
import Magnetic from "@/app/common/Magnetic";

interface ILink {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<SetStateAction<string>>;
  handleScrollTo: (id:string) => void;
}

export default function NavLink({ data, isActive, setSelectedIndicator,handleScrollTo }: ILink) {
  const { title, href, index } = data;

  return (
    <Magnetic>
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
        <a onClick={()=>handleScrollTo(href)}  >{title}</a>
    </motion.div>
      </Magnetic>
  );
}
