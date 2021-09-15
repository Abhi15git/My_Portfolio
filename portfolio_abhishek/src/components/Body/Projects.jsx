import React from "react";
import styles from "../Css/projects.module.css";
import lenskart from "../images/lenskart.png";
import instahyre from "../images/instahyre.png";
import coastal from "../images/coastal.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <p className={styles.head}>Few things I have build!</p>
      <section className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.links}>
            <a>
              {" "}
              Demo
              <LanguageIcon fontSize="large" />
            </a>
          </div>
          <div className={styles.siteName}>
            <h3>Lenskart.com</h3>
            <div className={styles.description}>
              <p>
                Founded in 2010, By an ex-Microsoft 'techie' with no money but
                truckloads of relentless passion to make a difference in this
                world, Lenskart is India's fastest growing eyewear business
                today.
              </p>
            </div>
          </div>

          <img src={lenskart} alt="" />
          <div className={styles.linksR}>
            <a href="https://github.com/Abhi15git/LensKart">
              <GitHubIcon fontSize="large" />
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.links}>
            <a>
              {" "}
              Demo
              <LanguageIcon fontSize="large" />
            </a>
          </div>
          <div className={styles.siteName}>
            {" "}
            <h3>Instahyre.com</h3>
            <div className={styles.description}>
              <p>
                Instahyre is an advanced hiring platform based on artificial
                intelligence, enabling recruiters to hire top talent
                effortlessly. Instead of having to waste hours on applying
                filters to search for the right candidates and then checking if
                they are interested, Instahyre provides the recruiter with a
                curated list candidates ready for hire from its premium
                database.
              </p>
            </div>
          </div>

          <img src={instahyre} alt="" />
          <div className={styles.linksR}>
            <a href="https://github.com/Abhi15git/Instahyre">
              <GitHubIcon fontSize="large" />
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.links}>
            <a>
              {" "}
              Demo
              <LanguageIcon fontSize="large" />
            </a>
          </div>
          <div className={styles.siteName}>
            {" "}
            <h3>Coastal.com</h3>
            <div className={styles.description}>
              <p>
                Since 1994 Coastal Inns has represented quality, Atlantic
                Canadian, independent hotels and motels to the travelling
                public. Every Coastal Inn offers a comfortable place to stay, a
                convenient location and great rates. Our warm welcome and
                attentive service reflects the East Coast’s reputation for
                down-home hospitality and friendliness.
              </p>
            </div>
          </div>

          <img src={coastal} alt="" />
          <div className={styles.linksR}>
            <a href="https://github.com/Abhi15git/CoastalInn-Clone">
              <GitHubIcon fontSize="large" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
