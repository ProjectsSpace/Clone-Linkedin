import React, { useState } from "react";
import styles from "./WritePostContainer.module.css";
import { Avatar, Modal } from "@material-ui/core";
import PostOption from "./PostOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import EventNoteIcon from "@material-ui/icons/EventNote";
function WritePostContainer() {
  const [open, setOpen] = useState(false);

  // modal function
  const handleOpen = () => {
    setOpen(true);
  };

  // modal function
  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = (e) => {
    e.preventDefault();
    // Implement posting feature
  };
  return (
    <div className={styles.write__container}>
      <div className={styles.write__area}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/9009219?v=4"
          className={styles.avatar}
        />
        <div className={styles.write__button}>
          <button type="button" onClick={handleOpen}>
            Start a post
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Post here"
            aria-describedby="Write linkedin post"
          >
            <div className={styles.modal__writePost}>
              <header className={styles.modal__writePostHeader}>
                <div className={styles.title}>
                  <h2>Create a post</h2>
                  <button
                    className={styles.modal__closeIcon}
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
                <div className={styles.author}>
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/9009219?v=4"
                    className={styles.avatar}
                  />
                  <p>Mocarram Hossain</p>
                </div>
              </header>
              <div className={styles.modal__postBody}>
                <form onSubmit={handlePost}>
                  <textarea
                    placeholder="What do you want to talk about?"
                    id=""
                  ></textarea>
                  <button>Post</button>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className={styles.write__choices}>
        <PostOption Icon={ImageIcon} title="Image" color="#70b5f9" />
        <PostOption Icon={VideoLibraryIcon} title="Video" color="#7fc15e" />
        <PostOption Icon={EventIcon} title="Event" color="#e7a33e" />
        <PostOption
          Icon={EventNoteIcon}
          title="Write Article"
          color="#fc9295"
        />
      </div>
    </div>
  );
}

export default WritePostContainer;
