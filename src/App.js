import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Aside from "./components/Aside";
import Registration from "./components/Registration.js";
import { Switch, Route, useHistory } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const history = useHistory();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        // user is logged in
        dispatch(
          login({
            email: userCredential.email,
            uid: userCredential.uid,
            displayName: userCredential.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
        history.push("/welcome");
      }
    });
  }, [history, dispatch]);

  console.log(user);

  // If not a user, redirect to welcome page
  if (!user) {
    history.replace("/welcome");
  }
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/welcome">
          <WelcomePage />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/">
          <Header />
          <div className={styles.app__body}>
            <Sidebar />
            <Feed />
            <Aside />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
