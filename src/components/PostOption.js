import React from "react";
import styles from "./PostOption.module.css";

function PostOption({ Icon, title, color, likeAction, active }) {
  return (
    <div onClick={likeAction} className={styles.option}>
      <Icon style={active ? { color: "#0a66c2" } : { color: color }} />
      <h4 style={active ? { color: "#0a66c2" } : { color: color }}>{title}</h4>
    </div>
  );
}

export default PostOption;
