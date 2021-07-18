import React from "react";
import styles from "./Aside.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
function Aside() {
  return (
    <div className={styles.aside}>
      <div className={styles.widget}>
        <header>
          <h2>Today’s top courses</h2>
        </header>
        <section className={styles.widget__body}>
          <ol className={styles.news__links}>
            <li>
              <Link to="#">Learn fullstack MERN</Link>
            </li>
            <li>
              <Link to="#">Learn fullstack MERN</Link>
            </li>
            <li>
              <Link to="#">Learn fullstack MERN</Link>
            </li>
          </ol>
        </section>
      </div>
      <div className={`${styles.widget} ${styles.sticky}`}>
        <section className={styles.widget__body}>
          <ul className={styles.footer__menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Developer</Link>
            </li>
          </ul>
          <footer className={styles.copyright}>
            <p> LinkedIn Corporation © {moment().format("YYYY")}</p>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Aside;
