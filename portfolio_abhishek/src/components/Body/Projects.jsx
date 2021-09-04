import React from "react";
import styles from "../Css/projects.module.css";
import lenskart from "../images/lenskart.png";
import instahyre from "../images/instahyre.png";
import coastal from "../images/coastal.png";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
        <p className={styles.head}>Few things I have build!</p>
      <section>
        <div className={styles.project}>
          <h2>Lenskart.com</h2>
          <img src={lenskart} alt="" />
        </div>
        <div className={styles.project}>
          <h2>Instahyre.com</h2>
          <img src={instahyre} alt="" />
        </div>
        <div className={styles.project}>
          <h2>Coastal.com</h2>
          <img src={coastal} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
