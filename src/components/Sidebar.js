import React from "react";
import styles from "./Sidebar.module.css";
import { Avatar } from "@material-ui/core";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { Link } from "react-router-dom";
function Sidebar() {
  // function for generating hashtag topics and links
  const hashTag = (topic) => (
    <Link to={`/${topic}`}>
      <FullscreenExitIcon /> <span>{topic}</span>
    </Link>
  );
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.widget} ${styles.user__identity}`}>
        <div className={styles.user__card}>
          <img
            src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
            alt=""
          />
          <Link to="/">
            <Avatar
              src="https://avatars.githubusercontent.com/u/9009219?v=4"
              className={styles.avatar}
            />
            <h4>Mocarram</h4>
          </Link>
        </div>
        <div className={styles.user__stats}>
          <Link to="/connections">
            <div className={styles.stat}>
              <p>Your connections</p>
              <p className={styles.count}>1000</p>
            </div>
          </Link>
          <Link to="/profileview">
            <div className={styles.stat}>
              <p>Who viewed your profile</p>
              <p className={styles.count}>2000</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.widget}>
        <header>
          <h2>Recent</h2>
        </header>
        <section className={styles.widget__body}>
          <ul className={styles.hash__tags}>
            <li>{hashTag("React")}</li>
            <li>{hashTag("Preact")}</li>
            <li>{hashTag("Vue")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
