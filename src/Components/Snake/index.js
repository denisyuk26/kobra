import React, { Component } from "react";
import ReactKobra from "./ReactKobra";
import InfoTable from "./InfoTable";
import styles from "./style.module.css";

export default class Snake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      maxScore: 0,
      gameOver: true,
      speed: 900,
      baseSpeed: 900,
      gameStarted: false,
      boost: true,
      boostCount: 3,
      timeBoost: 5
    };
  }

  setGameOver = bool => {
    this.setState({
      gameOver: bool,
      score: 0
    });
  };

  setMaxScore = score => {
    this.setState(prevScore =>
      prevScore.maxScore < score
        ? (prevScore.maxScore = score)
        : prevScore.maxScore
    );
  };

  updateScore = score => {
    this.setState({
      score: score
    });
  };

  updateBoostStatus = boost => {
    this.setState({
      boost: boost
    });
  };

  updateSpeed = speed => {
    this.setState({
      speed: speed
    });
  };

  updateBoostCount = count => {
    this.setState({
      boostCount: count
    });
  };

  updateStartStatus = start => {
    this.setState({
      gameStarted: start
    });
  };

  updateBaseSpeed = baseSpeed => {
    this.setState({
      baseSpeed: baseSpeed
    });
  };

  updateBoostTime = boostTime => {
    this.setState({
      timeBoost: boostTime
    });
  };

  render() {
    const {
      score,
      maxScore,
      gameOver,
      speed,
      gameStarted,
      boost,
      boostCount,
      baseSpeed,
      timeBoost
    } = this.state;
    return (
      <div id={styles.snake_app_container}>
        <InfoTable
          setGameOver={this.setGameOver}
          updateSpeed={this.updateSpeed}
          updateBaseSpeed={this.updateBaseSpeed}
          boost={boost}
          score={score}
          speed={speed}
          maxScore={maxScore}
          baseSpeed={baseSpeed}
          timeBoost={timeBoost}
          boostCount={boostCount}
          gameStarted={gameStarted}
        />
        <ReactKobra
          setMaxScore={this.setMaxScore}
          setGameOver={this.setGameOver}
          updateSpeed={this.updateSpeed}
          updateScore={this.updateScore}
          updateBoostTime={this.updateBoostTime}
          updateBoostCount={this.updateBoostCount}
          updateStartStatus={this.updateStartStatus}
          updateBoostStatus={this.updateBoostStatus}
          boost={boost}
          speed={speed}
          gameOver={gameOver}
          baseSpeed={baseSpeed}
          timeBoost={timeBoost}
          boostCount={boostCount}
          gameStarted={gameStarted}
        />
      </div>
    );
  }
}
