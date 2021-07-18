import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { auth } from "../firebase/firebase";
import { logout, selectUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./UserOptions.module.css";
export default function UserOptions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const user = useSelector(selectUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Logout handle
  const handleLogout = () => {
    dispatch(logout());

    auth.signOut();

    setAnchorEl(null);

    history.push("/welcome");
  };

  // Just a random test
  const handleTest = () => {
    alert("Hi test");
    setAnchorEl(null);
  };

  return (
    <div>
      <span onClick={handleClick}>
        {user?.displayName}{" "}
        <span className={styles.option__icon}>&#10148;</span>
      </span>
      <Menu
        className={styles.option__list}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleTest}>Test</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
