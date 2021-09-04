import React from "react";
import styles from "../Css/about.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.head}>I develop web products!</p>
      <div className={styles.about}>
        <section>
          <h1>About</h1>
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
            <a><h3 className={styles.resume}>My Resume <i class="fas fa-download"></i></h3></a>
        </section>
        <section>
            <h1>Proficiencies</h1>
            <div className={styles.techStack}>
            <div><i class="devicon-html5-plain colored"></i><p>HTML</p></div>
            <div><i class="devicon-css3-plain colored"></i><p>CSS</p></div>
            <div><i class="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
            <div><i class="devicon-react-original colored"></i><p>React</p></div>
            <div><i class="devicon-redux-original colored"></i><p>Redux</p></div>
            <div><i class="devicon-nodejs-plain colored"></i><p>Node</p></div>
               
            </div>
        </section>

      
      </div>
    </div>
  );
};
