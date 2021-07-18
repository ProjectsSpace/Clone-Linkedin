import React from "react";
import styles from "./PostOption.module.css";

function PostOption({ Icon, title, color, likeAction }) {
  return (
    <div onClick={likeAction} className={styles.option}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default PostOption;
