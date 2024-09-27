import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "C2 Montreal",
      src: "cloud-ops.svg",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "headphones.svg",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "proptech.svg",
      color: "#EFE8D3",
    },
  ];

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div className={styles.imageContainer}>
          <Image
            src={`../../public/images/${projects[selectedProject].src}`}
            fill
            alt="project image"
          />
        </div>
        <div className={styles.column}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
