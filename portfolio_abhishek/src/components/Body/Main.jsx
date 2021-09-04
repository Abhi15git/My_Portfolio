import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import profile from "../images/profile.png";
import styles from "../Css/Main.module.css";

const Main = () => {
    const history = useHistory();
    const [hello,setHello] = useState("Hello.");
    const [me,setMe] = useState("I am");
    const [name,setName] = useState("Abhishek");



  return (
      <div className={styles.profile}>
        <div className={styles.nav} >
            <div className={styles.box} onMouseOverCapture={()=>setHello("About")} onMouseOutCapture={()=>setHello("Hello.")}><p className={styles.p} onClick={()=>history.push("/about")} >{hello}</p></div>
            <div className={styles.box} onMouseOverCapture={()=>setMe("Projects")} onMouseOutCapture={()=>setMe("I am")}><p className={styles.p} onClick={()=>history.push("/projects")} >{me}</p></div>
            <div className={styles.box} onMouseOverCapture={()=>setName("Contact")} onMouseOutCapture={()=>setName("Abhishek")}><p className={styles.p}>{name}</p></div>
        </div>
       <div className={styles.shade}>
       <div className={styles.imgBox}>
       <img src={profile} alt="" />
       </div>
       <div className={styles.outline}>

       </div>
       </div>
      </div>
      
  );
};

export default Main;
