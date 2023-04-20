import React, { useState } from "react";
import styles from "./SignUp.module.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function SingUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!values.name || !values.email | !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const username = res.user;
        await updateProfile(username, {
          displayName: values.name,
        });
        navigate("/signin");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div id={styles.SignUpMainContainer}>
      <div id={styles.MainBoardContainer}>
        <p id={styles.BoadHeading}>Board.</p>
      </div>
      <div id={styles.SingUpContainer}>
        <div id={styles.SingUpHeading}>
          <p id={styles.Heading1}>SignUp</p>
          <p id={styles.Heading2}>Sign Up to your account</p>
        </div>

        <div id={styles.SingUpDetailsContainer}>
          <div id={styles.containerForDetails}>
            <p className={styles.detailsHeading}>Name</p>
            <input
              type="text"
              placeholder="Enter you Name"
              className={styles.detailsData}
              onChange={(event) => {
                setValues((prev) => ({ ...prev, name: event.target.value }));
              }}
            />
          </div>
          <div id={styles.containerForDetails}>
            <p className={styles.detailsHeading}>Email address</p>
            <input
              type="email"
              placeholder="Enter you Email"
              className={styles.detailsData}
              onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
              }}
            />
          </div>
          <div id={styles.containerForPassword}>
            <p className={styles.detailsHeading}>Password</p>
            <input
              type="password"
              placeholder="Enter you password"
              className={styles.detailsData}
              onChange={(event) => {
                setValues((prev) => ({ ...prev, pass: event.target.value }));
              }}
            />
          </div>
          <div className={styles.ErrorMessageContainer}>
            <span className={styles.errormessage}>{errorMsg}</span>
          </div>
          <div id={styles.SignUpButtonContainer}>
            <button
              id={styles.SignUpButton}
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div id={styles.AlreadyHaveAccount}>
          <p>
            Already have an account?
            <span>
              <a href="/signin" id={styles.anchortagforSignInhere}>
                SignIn here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
