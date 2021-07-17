import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { auth } from "../firebase/firebase";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./UserOptions.module.css";
export default function UserOptions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

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
        Mocarram <span className={styles.option__icon}>&#10148;</span>
      </span>
      <Menu
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
