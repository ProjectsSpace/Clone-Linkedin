import React from "react";
import styles from "./FeedPost.module.css";
import { Avatar } from "@material-ui/core";
import PostOption from "./PostOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

function FeedPost({ name, description, content, photoURL }) {
  return (
    <div className={styles.feed__post}>
      <header className={styles.post__header}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/9009219?v=4"
          className={styles.avatar}
        />
        <div className={styles.post__meta}>
          <h2 className={styles.author}>{name}</h2>
          <p className={styles.desc}>{description}</p>
        </div>
      </header>
      <section className={styles.post__body}>{content}</section>
      <footer className={styles.post__actions}>
        <PostOption Icon={ThumbUpIcon} title="Like" color="#0009" />
        <PostOption Icon={CommentIcon} title="Comment" color="#0009" />
        <PostOption Icon={ShareIcon} title="Share" color="#0009" />
        <PostOption Icon={SendIcon} title="Send" color="#0009" />
      </footer>
    </div>
  );
}

export default FeedPost;
