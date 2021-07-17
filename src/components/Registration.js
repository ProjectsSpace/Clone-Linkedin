import React, { useState } from "react";
import styles from "./Registration.module.css";
import { Link, useHistory } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function WelcomePage() {
  const history = useHistory();
  const [user, setUser] = useState("");
  // If a user, redirect to app page
  if (user) {
    history.replace("/");
  }
  // Login handler
  const handleRegistration = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.welcome__page}>
      <header className={styles.navbar}>
        <div className={styles.welcome__logo}>
          Linked
          <LinkedInIcon />
        </div>
        <div className={styles.nav__items}>
          <Link to="/register">
            <button className={styles.sign__in}>Join now</button>
          </Link>
          <Link to="/welcome">
            <button>Sign in</button>
          </Link>
        </div>
      </header>
      <section className={styles.login__area}>
        <div className={styles.hero__text}>
          <p>Register for this amazing cloned community</p>
        </div>
        <form onSubmit={handleRegistration}>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm password" />
          <p className={styles.agreement}>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>
          <button>Agree and join</button>
        </form>
      </section>
    </div>
  );
}

export default WelcomePage;
