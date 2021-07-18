import React, { useEffect, useState } from "react";
import styles from "./FeedPost.module.css";
import { Avatar } from "@material-ui/core";
import PostOption from "./PostOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import { db } from "../firebase/firebase";

function FeedPost({ name, description, content, profilePhoto, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [active, setActive] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);

  // Getting likes count from the database
  // Setting likes count to the state
  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .onSnapshot((doc) => {
        setLikesCount(doc.data().likes);
      });
  }, [postId]);

  const handleLike = () => {
    // setting the item to active to color differently
    setActive(true);

    // Adding like count to the database with an increment
    db.collection("posts")
      .doc(postId)
      .update({
        likes: likesCount + 1,
      })
      .then(() => {
        console.log("like successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating likes: ", error.message);
      });
  };

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
      <section className={styles.post__reactions}>
        <p className={styles.likes}>{likesCount} likes</p>
        <p className={styles.comments}>{commentsCount} comments</p>
      </section>
      <footer className={styles.post__actions}>
        <PostOption
          likeAction={handleLike}
          Icon={ThumbUpIcon}
          title="Like"
          color="#0009"
          active={active}
        />
        <PostOption Icon={CommentIcon} title="Comment" color="#0009" />
        <PostOption Icon={ShareIcon} title="Share" color="#0009" />
        <PostOption Icon={SendIcon} title="Send" color="#0009" />
      </footer>
    </div>
  );
}

export default FeedPost;
