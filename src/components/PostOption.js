import React from "react";
import styles from "./PostOption.module.css";

function PostOption({ Icon, title, color }) {
  return (
    <div className={styles.option}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default PostOption;
