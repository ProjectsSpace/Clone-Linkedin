import React, { useState } from "react";
import styles from "./Registration.module.css";
import { Link, useHistory } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/userSlice";
import { auth } from "../firebase/firebase";

function WelcomePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  // If a user, redirect to app page
  if (user) {
    history.push("/");
  }
  // Login handler
  const handleRegistration = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't match");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userCredential.user
            .updateProfile({
              displayName: username,
            })
            .then(() => {
              dispatch(
                login({
                  uid: userCredential.user.uid,
                  displayName: username,
                  email: email,
                })
              );
            });

          // Redirecting to homepage after registration
          history.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
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
          <input
            type="text"
            placeholder="Enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
