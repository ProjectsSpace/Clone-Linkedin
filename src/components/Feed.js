import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import styles from "./Feed.module.css";
import FeedPost from "./FeedPost";
import WritePostContainer from "./WritePostContainer";

function Feed() {
  const [posts, setPosts] = useState();

  // Listener for posts to load from the database
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className={styles.feed}>
      {/* Post writing component */}
      <WritePostContainer />

      {/* Single posts on the feed */}
      {posts?.map(({ id, post: { name, description, content, photoURL } }) => (
        <FeedPost
          key={id}
          name={name}
          description={description}
          content={content}
          photoURL={photoURL}
        />
      ))}
    </div>
  );
}

export default Feed;
