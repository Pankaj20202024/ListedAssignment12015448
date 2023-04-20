import React, { useEffect, useState } from "react";
import styles from "./UserChoice.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

export default function UserChoice(props) {
  const [userName, setUserName] = useState("");
  const [additionaldata,setadditionaldata]=useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName );
        setadditionaldata("As You already have account please SignIn or if you want to use anther account then please SignUp");
      } else {
        setUserName("If you already have an account then SignIn else SignUp ");
      }
    });
  }, []);

  return (
    <div id={styles.UserChoiceMainContainer}>
      <div id={styles.SwitchContainer}>
        <Link to="/signin" className={styles.links}>
          <button className={styles.buttons}>SignIn</button>
        </Link>
        <Link to="/signup" className={styles.links}>
          <button className={styles.buttons}>SignUp</button>
        </Link>
      </div>
      <div className={styles.GivingAdvice}>
        <h2 id={styles.GivingAdvice}>
          {userName
            ? `Welcome - ${userName} `
            : "If you already have an account then SignIn else SignUp "}
        </h2>
        <h2 id={styles.GivingAdvice}>
          {userName
            ? `${additionaldata}`
            : " "}
        </h2>
      </div>
    </div>
  );
}
