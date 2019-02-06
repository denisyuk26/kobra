// Core
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Snake from "./Components/Snake";
import { HashRouter, Route, Switch } from "react-router-dom";
import styles from './index.module.css'

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div id={styles.template}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/game" component={Snake} />
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
