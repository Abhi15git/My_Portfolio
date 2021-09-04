import React from 'react'
import styles from "../Css/contact.module.css";


const contact = () => {
    return (
        <div className={styles.contactContainer}>
      <p className={styles.head}>Lets make something Great!</p>
      <div className={styles.contact}>
        <section>
          <h1>Contact</h1>
          <p>
          I am intrested and curious to work with you as a developer.
          </p>
          <p>
            Feel free to reach out through any platforms below.
          </p>
        </section>
        <section className={styles.platforms}>
            <div><a href="mailto: 9528442373.as@gmail.com"><i class="far fa-envelope-open"></i>&nbsp;&nbsp;9528442373.as@gmail.com</a></div>
           <div><a href="https://www.linkedin.com/in/abhi15linkin/"><i class="fab fa-linkedin-in"></i>&nbsp;&nbsp;Linkedin</a></div>
        </section>

      
      </div>
    </div>
    )
}

export default contact
