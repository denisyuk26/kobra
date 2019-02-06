import React, { Component } from "react";

import styles from "./infotable.module.css";
console.log(styles);
export default class InfoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple: [],
      optionsWithSpeed: [
        { name: "easy", speed: 900 },
        { name: "medium", speed: 600 },
        { name: "hard", speed: 300 }
      ],
      difficulty: "easy"
    };
  }

  updateSpeed = e => {
    console.log(e.target.options);
    if (!this.props.gameStarted) {
      this.setState({ difficulty: e.target.label });
      this.state.optionsWithSpeed.map(item => {
        if (item.name === e.target.value) {
          this.props.updateBaseSpeed(item.speed);
        }
        return item;
      });
    }
  };

  renderSpeedOptions = () => {
    return (
      <select
        disabled={this.props.gameStarted}
        onChange={this.updateSpeed}
        value={this.state.difficulty}
        className={styles.speed_name}
      >
        {this.state.optionsWithSpeed.map(item => {
          return (
            <option key={item.speed} label={item.name} value={item.name} />
          );
        })}
        ;
      </select>
    );
  };

  updateApplesForBoost = (apple = []) => {
    if (apple.length < this.props.boostCount) {
      apple.length = this.props.boostCount;
      apple.fill(styles.apple);
    }
    return apple.map((i, ind) => <div className={styles.apple} key={ind} />);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.boostCount < this.props.boostCount) {
      this.updateApplesForBoost();
    }
  }

  render() {
    return (
      <div id={styles.showButtons} className={styles.info_container}>
        <div className={styles.high_score_wrap}>
          <div className={styles.high_score} />
          <span className={styles.info_value}>{this.props.maxScore}</span>
        </div>
        <div className={styles.score_wrap}>
          <div className={styles.score} />
          <span className={styles.info_value}>{this.props.score}</span>
        </div>
        <div className={styles.time_wrap}>
          <div className={styles.time} />
          <span className={styles.info_value}>{this.props.timeBoost}</span>
        </div>
        <div className={styles.boost_container}>
          <div className={styles.boost} />
          <span
            className={
              this.props.boost ? styles.available : styles.not_available
            }
          />
        </div>
        <div className={styles.apples_container}>
          {!this.props.boost ? (
            this.updateApplesForBoost()
          ) : (
            <div className={styles.space} />
          )}
        </div>
        <div 
        onClick={this.updateSpeed} 
        className={styles.speed_container}
        >
          <div className={styles.speed} />
          {this.renderSpeedOptions()}
        </div>
      </div>
    );
  }
}
