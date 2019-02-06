import React, { Component } from "react";
import styles from "./home.module.css";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLetters: "",
      mount: false
    };
  }

  initGreeting = () => {
    let txt = `⚛️Hello Visitor!⚛️ Greet to see You!✌️✌️✌️`.split("");
    this.greetingTimer = setInterval(() => {
      if (!txt[0]) return false;
      this.setState(prevState => {
        prevState.mount = true;
        return (prevState.showLetters += txt.shift());
      });
    }, 50);
  };

  componentDidMount = () => {
    this.initGreeting();
  };
  componentWillUnmount = () => {
    clearInterval(this.greetingTimer);
  };

  render() {
    const { mount, showLetters } = this.state;

    return (
      <div id={styles.greet}>
        <div className={styles.greeting}>
          {mount ? <p id={styles.Text_show}>{showLetters}</p> : null}
        </div>
      </div>
    );
  }
}
