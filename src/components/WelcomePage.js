import React, { useState } from "react";
import styles from "./WelcomePage.module.css";
import { Link, useHistory } from "react-router-dom";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { auth } from "../firebase/firebase";
function WelcomePage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const user = useSelector(selectUser);
  // If a user, redirect to app page
  if (user) {
    history.push("/");
  }
  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={styles.welcome__page}>
      <header className={styles.navbar}>
        <Link to="/">
          <div className={styles.welcome__logo}>
            Linked
            <LinkedInIcon />
          </div>
        </Link>
        <div className={styles.nav__items}>
          <Link to="/register">
            <button>Join now</button>
          </Link>
          <Link to="/welcome">
            <button className={styles.sign__in}>Sign in</button>
          </Link>
        </div>
      </header>
      <section className={styles.login__area}>
        <div className={styles.hero__text}>
          <p>Welcome to your cloned professional community</p>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign in</button>
        </form>
      </section>
    </div>
  );
}

export default WelcomePage;
