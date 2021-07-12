import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <section className={styles.header__left}>
          <div className={styles.logo}>
            <LinkedInIcon />
          </div>
          <div className={styles.header__search}>
            <SearchIcon />
            <input type="text" placeholder="Search for everything..." />
          </div>
        </section>
        <section className={styles.header__right}>
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={PeopleIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={SmsIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar="https://avatars.githubusercontent.com/u/9009219?v=4"
            title="Mocarram"
          />
        </section>
      </div>
    </header>
  );
}

export default Header;
