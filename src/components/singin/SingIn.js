import React, { useState } from "react";
import styles from "./SingIn.module.css";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function SingIn() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!values.email | !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div id={styles.SignInMainContainer}>
      <div id={styles.MainBoardContainer}>
        <p id={styles.BoadHeading}>Board.</p>
      </div>
      <div id={styles.SingInContainer}>
        <div id={styles.SingInHeading}>
          <p id={styles.Heading1}>SignIn</p>
          <p id={styles.Heading2}>Sign in to your account</p>
        </div>
        <div id={styles.SignInOption}>
          <button className={styles.SingInOptionButtons}>
            <div id={styles.SingInImgageContainer}>
              <img
                src="./signinimages/google.png"
                alt="myassignment"
                className={styles.SignOptionImage}
              />
            </div>

            <p>Sign in with Google</p>
          </button>
          <button className={styles.SingInOptionButtons}>
            <div id={styles.SingInImgageContainer}>
              <img
                src="./signinimages/apple.png"
                alt="myassignment"
                className={styles.SignOptionImage}
              />
            </div>

            <p>Sign in with Apple</p>
          </button>
        </div>

        <div id={styles.SingInDetailsContainer}>
          <div id={styles.containerForDetails}>
            <p className={styles.detailsHeading}>Email address</p>
            <input
              type="email"
              placeholder="Enter you Email"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
              }}
              className={styles.detailsData}
            />
          </div>
          <div id={styles.containerForPassword}>
            <p className={styles.detailsHeading}>Password</p>
            <input
              type="password"
              placeholder="Enter you password"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, pass: event.target.value }));
              }}
              className={styles.detailsData}
            />
          </div>

          <div id={styles.containerForForgetPassword}>
            <a id={styles.forgotPassword} href="#">
              Forgot password?
            </a>
          </div>

          <div className={styles.ErrorMessageContainer}>
            <span className={styles.errormessage}>{errorMsg}</span>
          </div>

          <div id={styles.SignInButtonContainer}>
            <button
              id={styles.SiginInButton}
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Sign In
            </button>
          </div>
        </div>

        <div id={styles.NoAccountContainer}>
          <p>
            Don't have an account?
            <span>
              <a href="/signup" id={styles.anchortagforregisterhere}>
                Register here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
