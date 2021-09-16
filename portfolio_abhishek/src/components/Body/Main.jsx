import React, { useEffect, useRef, useState } from "react";
import profile from "../images/profile.png";
import styles from "../Css/Main.module.css";
import Styled from "styled-components";
import { About } from "./About";
import { throttle } from "lodash";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { init } from "ityped";

const Container = Styled.div`
height:100vh;
overflow:hidden;
&>div{
  transform:${(props) => (props.prop ? "translateY(-50%)" : "translateY(0%)")};
  transition:transform .5s ease-in-out;
}
`;

const Main = () => {
  const mainSection = useRef();
  const aboutSection = useRef();
  const textRef = useRef();

  const [translate, setTranslate] = useState(0);

  const fn = throttle(
    (event) => {
      if (event === undefined || event.deltaY >= 1) setTranslate(1);
      else if (event.deltaY <= -241) {
        setTranslate(0);
      }
    },
    0,
    {
      leading: true,
      trailing: true,
    }
  );

  const wheelEvent = () => {
    setTranslate(0);
    window.addEventListener("wheel", fn);
  };

  useEffect(() => {
    wheelEvent();
let touchstart ;
    window.addEventListener(
      "touchstart",
      (event) => {
        console.log(event.touches[0].clientY);
        touchstart=event.touches[0].clientY
      },
      false
    );
    window.addEventListener(
      "touchmove",
      (event) => {
        console.log(event.touches[0].clientY);
        if(touchstart-event.touches[0].clientY>200){
          setTranslate(1);
        }
        else if(touchstart-event.touches[0].clientY<-200)
        setTranslate(0);
      },
      false
    );

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full-Stack Web Developer", "MERN Full Stack Developer"],
    });
  }, []);

  const [hello, setHello] = useState("Hello.");
  const [me, setMe] = useState("I am");
  const [name, setName] = useState("Abhishek");

  return (
    <Container prop={translate}>
      <div>
        <div className={styles.profile} ref={mainSection}>
          <div className={styles.nav}>
            <div
              className={styles.box}
              onMouseOverCapture={() => setHello("About")}
              onMouseOutCapture={() => setHello("Hello.")}
            >
              <p
                className={styles.p}
                onClick={() => {
                  fn();
                }}
              >
                {hello}
              </p>
            </div>
            <div
              className={styles.box}
              onMouseOverCapture={() => setMe("Projects")}
              onMouseOutCapture={() => setMe("I am")}
            >
              <p className={styles.p}>{me}</p>
            </div>
            <div
              className={styles.box}
              onMouseOverCapture={() => setName("Contact")}
              onMouseOutCapture={() => setName("Abhishek")}
            >
              <p className={styles.p}>{name}</p>
            </div>
          </div>

          <h3 className={styles.ityped}>
            <span ref={textRef}></span>
          </h3>

          <h3 className={styles.resume}>
            My Resume <i class="fas fa-download"></i>
          </h3>
          <div className={styles.scrollbtn}>
            <TouchAppIcon />
            <h3>Scroll Up</h3>
          </div>

          <div className={styles.imgBox}>
            <img src={profile} alt="" />
          </div>
          <div className={styles.waveSecondary}></div>
        </div>
        <div className={styles.aboutSection}>
          <About prop={aboutSection} wheelEvent={wheelEvent} />
        </div>
      </div>
    </Container>
  );
};

export default Main;
