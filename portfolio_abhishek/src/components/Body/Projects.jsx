import React from "react";
import styles from "../Css/projects.module.css";
import lenskart from "../images/lenskart.png";
import instahyre from "../images/instahyre.png";
import freeschool from "../images/freeschool.png"
import tumblr from "../images/tumblr.png"
import coastal from "../images/coastal.png";
import sudoku from "../images/sudoku.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { Button } from "@material-ui/core";

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <p className={styles.head}>Few things I have built!</p>
      <section>
        <h1 className={styles.subHead}>Projects</h1>
      </section>

      <section className={styles.projectList}>

      <div className={styles.project}>
          <div className={styles.image}>
            <img src={tumblr} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://tumblrclone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              <h3>Tumblr.com</h3>
            </div>
            <p>
            Tumblr is an American microblogging and social networking website founded in 2007. The service allows users to post multimedia and other content to a short-form blog.
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>JavaScript, React,HTML, CSS, MongoDB, Express, Mongoose, Server Sent Events and UI Libraries</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/tumblr"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>


        <div className={styles.project}>
          <div className={styles.image}>
            <img src={freeschool} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://freeschool4u.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              <h3>Free School</h3>
            </div>
            <p>
              The idea to build this project was originated by the thought of
              helping those students who are unable to pay for some extra
              classes they might need to resolve their doubts. With the help of
              this platform anyone who is willing to help others can organise a
              45 min free zoom session as a tutor and help those in need.
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>JavaScript, React,HTML, CSS, MongoDB, Express, Mongoose, WebSockets and UI Libraries</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/freeschool/tree/master/freeschool"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.image}>
            <img src={sudoku} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://sudoku-by-abhishek.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              <h3>Sudoku Solver</h3>
            </div>
            <p>
              Simple Grindola Sudoku solver UI which provides the solutions for
              all ordinary 9x9 sudoku problems. Slow mode available to observe
              the solution on the fly.
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>HTML, CSS, JavaScript, React</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/Sudoku"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.image}>
            <img src={lenskart} alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://focused-hugle-5e836d.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              <h3>Lenskart.com</h3>
            </div>
            <p>
              Founded in 2010, By an ex-Microsoft 'techie' with no money but
              truckloads of relentless passion to make a difference in this
              world, Lenskart is India's fastest growing eyewear business today.
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>HTML, CSS, JavaScript</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/LensKart"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.image}>
            <img src={instahyre} alt="" />
          </div>

          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://drive.google.com/file/d/10TXGyObg9NbCsZpNoPqHhL9qc-tjvLpm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              {" "}
              <h3>Instahyre.com</h3>
            </div>
            <p>
              Instahyre is an advanced hiring platform based on artificial
              intelligence, enabling recruiters to hire top talent effortlessly.
              Instead of having to waste hours on applying filters to search...
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>HTML, CSS, JavaScript, React, M-UI</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/Instahyre"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.image}>
            <img src={coastal} alt="" />
          </div>

          <div className={styles.description}>
            <div className={styles.links}>
              <a
                href="https://drive.google.com/file/d/10XIrWq3wwmWooCOYFORXmtNyHKLTeMO8/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  Demo &nbsp;
                  <OpenInBrowserIcon fontSize="medium" />
                </Button>
              </a>
            </div>
            <div className={styles.siteName}>
              {" "}
              <h3>Coastal.com</h3>
            </div>
            <p>
              Since 1994 Coastal Inns has represented quality, Atlantic
              Canadian, independent hotels and motels to the travelling public.
              Every Coastal Inn offers a comfortable place to stay, a convenient
              location and...
            </p>
            <div className={styles.projectTech}>
              <p>
                <b>HTML, CSS, JavaScript, React, M-UI</b>
              </p>
            </div>
            <div className={styles.linksR}>
              <a
                href="https://github.com/Abhi15git/CoastalInn-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary" size="small">
                  {" "}
                  <GitHubIcon fontSize="medium" /> &nbsp; Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
