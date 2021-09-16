import React from "react";
import styles from "../Css/contact.module.css";
import PhoneIcon from "@material-ui/icons/Phone";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.head}>Lets make something Great!</p>
      <div className={styles.contact}>
        <section>
          <h1 className={styles.subHead}>Contact</h1>
          <p>I am intrested and curious to work with you as a developer.</p>
          <p>Feel free to reach out through any platforms below.</p>
        </section>
        <section className={styles.platforms}>
          <div>
            <a href="mailto: 9528442373.as@gmail.com">
              <i class="far fa-envelope-open"></i>
              &nbsp;&nbsp;9528442373.as@gmail.com
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/abhi15linkin/">
              <i class="fab fa-linkedin-in"></i>&nbsp;&nbsp;Linkedin
            </a>
          </div>
          <div>
            <a href="https://www.github.com/Abhi15git/">
              <i class="devicon-github-original"></i>&nbsp;&nbsp;GitHub
            </a>
          </div>
          <div>
            <a href="/">
              <PhoneIcon style={{ color: "white" }} />+917983185957
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
