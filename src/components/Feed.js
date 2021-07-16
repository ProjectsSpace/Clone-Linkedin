import React from "react";
import styles from "./Feed.module.css";
import FeedPost from "./FeedPost";
import WritePostContainer from "./WritePostContainer";

function Feed() {
  return (
    <div className={styles.feed}>
      {/* Post writing component */}
      <WritePostContainer />

      {/* Single posts on the feed */}
      <FeedPost
        name="Mocarram Hossain"
        description="Crazy Coder"
        content="This is a post about how awesome React is, just talking a bit too much about it because it's amazing to work with."
      />
      <FeedPost
        name="Mocarram Hossain"
        description="Crazy Coder"
        content="It's slightly different but the core thing stays the same, bragging about how awesome React is and how mad I want to master it for every kind of development!!"
      />
    </div>
  );
}

export default Feed;
