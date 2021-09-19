import React, { useEffect } from "react";
import styles from "../Css/about.module.css";
import KUTE from "kute.js";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./contact";
import { Button } from "@material-ui/core";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import resume from '../Resume/abhishek-resume.pdf'

export const About = ({ prop, wheelEvent }) => {
  useEffect(() => {
    let x = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 1000, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-2",
      { path: "#blob1-2" },
      { path: "#blob2-2" },
      { repeat: 999, duration: 2000, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-3",
      { path: "#blob1-3" },
      { path: "#blob2-3" },
      { repeat: 999, duration: 1500, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-4",
      { path: "#blob1-4" },
      { path: "#blob2-4" },
      { repeat: 999, duration: 2500, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-5",
      { path: "#blob1-5" },
      { path: "#blob2-5" },
      { repeat: 999, duration: 1000, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-6",
      { path: "#blob1-6" },
      { path: "#blob2-6" },
      { repeat: 999, duration: 2000, yoyo: true }
    ).start();

    KUTE.fromTo(
      "#blob1-7",
      { path: "#blob1-7" },
      { path: "#blob2-7" },
      { repeat: 999, duration: 2000, yoyo: true }
    ).start();

    return () => {
      console.log('return',x)
      clearTimeout(x);
    };
  }, []);
  return (
    <div className={styles.aboutContainer}>
      <Navbar wheelEvent={wheelEvent} />
      <p className={styles.head}>I develop web products!</p>
      <div className={styles.about} ref={prop} id="about">
        <section>
          <h1 className={styles.subHead}>About</h1>
          <p>
            Hi, I am Abhishek Singh. I am a multi-talented person who is seeking
            to learn more from this life. You can call me a full stack
            developer.
          </p>
          <p>
            I define myself by the work i want to do. I prefer to keep learning,
            challenging myself and do interesting things that matter
          </p>
        </section>
        <section>

          <Button variant="contained" color="primary"><a  href={resume} target="_blank" rel="noreferrer" style={{color:"white",textDecoration:"none"}}>Resume</a></Button>
          {/* <h3 className={styles.resume}>
            My Resume <i class="fas fa-download"></i>
          </h3> */}
        </section>
        <section className={styles.techSection}>
          <h1 className={styles.subHead}>Proficiencies</h1>
          <div className={styles.techStack}>
            <div>
              <div>
                <i class="devicon-html5-plain colored"></i>
                <p>HTML</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <div>
                <i class="devicon-css3-plain colored"></i>
                <p>CSS</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-2"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-2"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <div>
                <i class="devicon-javascript-plain colored"></i>
                <p>JavaScript</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-3"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-3"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <div>
                <i class="devicon-react-original colored"></i>
                <p>React</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-4"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-4"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <div>
                <i class="devicon-redux-original colored"></i>
                <p>Redux</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-5"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-5"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <div>
                <i class="devicon-nodejs-plain colored"></i>
                <p>Node</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-6"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-6"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>



            <div>
              <div>
              <i class="devicon-github-original"></i>
                <p>GitHub</p>
              </div>
              <svg
                className={styles.blob}
                id="visual"
                viewBox="200 50 500 700"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                  <path
                    id="blob1-7"
                    d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                    fill="black"
                  ></path>
                </g>
                <g
                  transform="translate(509.54377535978017 281.49390864595887)"
                  style={{ visibility: "hidden" }}
                >
                  <path
                    id="blob2-7"
                    d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>


          </div>
        </section>

       <section>
         <h1 className={styles.subHead}>GitHub Graph</h1>
          <div>
            <GitHubCalendar  username="abhi15git" children={<ReactTooltip html/>}/>
          </div>
       </section>

      </div>

      {/* <div className={styles.waveSecondary}>
        <div></div>
      </div> */}

      <div id="project">
        <Projects />
      </div>
      <br />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
