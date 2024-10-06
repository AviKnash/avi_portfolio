import { motion } from "framer-motion";
import styles from "./style.module.scss";

interface ITooltip {
  content: string;
}
const Tooltip = ({ content }: ITooltip) => {
  return (
    <motion.div
      className={styles.tooltip}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  );
};

export default Tooltip;
