import React, { Component } from 'react';
import SnakeGame from './ReactKobra';
import InfoTable from './InfoTable';
import '../../App.css';
import './style.scss';

export default class Snake extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      maxScore: 0,
      gameOver: true,
      speed: 900,
      baseSpeed: 900,
      start: false,
      boost: '1',
      boostCount: 3,
      timeBoost: 5
    }
  }
  isGameOver = (bool) => {
    return this.setState({
      gameOver: bool,
      score: 0
    })
  }
  isMaxScore = (score) => {
    return this.setState(
      prevScore => prevScore.maxScore < score
                 ? prevScore.maxScore = score
                 : prevScore.maxScore
               )
  }
  updateScore = (score)=> {
      return this.setState({
        score: score
      })
  }
  updateBoost = (boost) => {
    return this.setState({
      boost: boost
    })
  }
  changeSpeed = (speed)=> {
    return this.setState({
      speed: speed
    })
  }
  updateCount = (count) => {
    return this.setState({
      boostCount: count
    })
  }
  updateStart = (start) => {
    return this.setState({
      start: start,
    })
  }
  updateBaseSpeed = (baseSpeed) => {
    return this.setState({
      baseSpeed: baseSpeed
    })
  }
  updateTimeBoost = (timeBoost) => {
    return this.setState({
      timeBoost: timeBoost
    })

  }
  componentDidMount = () => {

  }

  componentWillUnmount = () => {
    clearInterval(SnakeGame.gameStart)
    return


  }
  render(){
    const {score, _isMounted, maxScore, gameOver, speed, start, boost, boostCount, baseSpeed, timeBoost} = this.state;
    return (
      <div id='snakeWrap' className="SnakeApp">
          <InfoTable
            isGameOver = {this.isGameOver}
            changeSpeed = {this.changeSpeed}
            updateBaseSpeed = {this.updateBaseSpeed}
            score = {score}
            speed = {speed}
            start = {start}
            boost = {boost}
            maxScore = {maxScore}
            baseSpeed = {baseSpeed}
            boostCount = {boostCount}
            timeBoost = {timeBoost}>
          </InfoTable>
          <SnakeGame
            isMaxScore = {this.isMaxScore}
            isGameOver = {this.isGameOver}
            changeSpeed = {this.changeSpeed}
            updateScore = {this.updateScore}
            updateCount = {this.updateCount}
            updateStart = {this.updateStart}
            updateBoost = {this.updateBoost}
            updateTimeBoost = {this.updateTimeBoost}
            boost = {boost}
            start = {start}
            speed = {speed}
            gameOver = {gameOver}
            baseSpeed = {baseSpeed}
            timeBoost = {timeBoost}
            boostCount = {boostCount}>
          </SnakeGame>
      </div>
    )
  }
}
