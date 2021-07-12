import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Aside from "./components/Aside";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.app__body}>
          <Sidebar />
          <Feed />
          <Aside />
          {/* App Sidebar */}
        </div>

        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
