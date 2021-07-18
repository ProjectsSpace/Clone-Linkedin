import React from "react";
import styles from "./HeaderOption.module.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ Icon, avatar, title, Options }) {
  const user = useSelector(selectUser);
  return (
    <div className={styles.header__option}>
      {Icon && <Icon className={styles.icon} />}
      {avatar && (
        <Avatar className={styles.avatar} src={avatar}>
          {user && user?.email[0]}
        </Avatar>
      )}
      <h3 className={styles.title}>{Options ? <Options /> : title}</h3>
    </div>
  );
}

export default HeaderOption;
