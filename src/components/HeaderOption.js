import React from "react";
import styles from "./HeaderOption.module.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ Icon, avatar, title }) {
  return (
    <div className={styles.header__option}>
      {Icon && <Icon className={styles.icon} />}
      {avatar && <Avatar className={styles.avatar} src={avatar} />}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
