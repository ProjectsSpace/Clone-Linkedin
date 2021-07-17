import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Aside from "./components/Aside";
import Registration from "./components/Registration.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  const history = useHistory();
  const [user, setUser] = useState("");

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
