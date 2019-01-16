import React, { Component } from 'react';
import SnakeGame from './ReactKobra';
import InfoTable from './InfoTable';
import '../../App.css';
import './style.css';

export default class Snake extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      maxScore: 0,
      gameOver: true,
      speed: 900,
      start: false

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
  changeSpeed = (speed)=> {
    return this.setState({
      speed: speed
    })
  }
  updatePlaying = (start) => {
    return this.setState({
      start: start,
    })
  }
  render(){
    const {score, maxScore, gameOver, speed, start} = this.state;
    return (

      <div id='snakeWrap'>
          <SnakeGame
            score={this.updateScore}
            gameOver = {this.isGameOver}
            maxScore={this.isMaxScore}
            start = {gameOver}
            playing = {this.updatePlaying}
            speed = {speed}>
          </SnakeGame>
          <InfoTable
            score={score}
            maxScore={maxScore}
            gameOver = {this.isGameOver}
            speed = {speed}
            start = {start}
            changeSpeed = {this.changeSpeed}>
          </InfoTable>
      </div>
    )

  }


}

//
// {
//   gameOver
//   ? (
//     <div>
//       <h1>Game Over! Score: {snake.body.length + 1}</h1>
//       <button onClick={this.startAgain} id='startAgain'>Play Again</button>
//     </div>
//   )
//   : <div>
//       <div id='buttons'>
//         <button onClick={this.startAgain} id='start'>Start the game</button>
//         <div className='mode'>
//           Change mode
//           <button  id='easy'>Easy</button>
//           <button  id='medium'>Medium</button>
//           <button  id='hard'>Hard</button>
//         </div>
//
//       </div>
//
//       <section id='grid'>
//             {
//               this.state.grid.map( row => (
//                 row.map( cell => (
//                   <div
//                     key={`${cell.row} ${cell.col}`}
//                     className={`cell ${
//                       this.isSnake(cell)
//                       ?'head':this.isApple(cell)
//                       ? 'apple' : this.isTail(cell)
//                       ? 'tail' : ''
//                     }`}>
//                   </div>
//                 ))
//               ))
//             }
//
//         </section>
//
//
//     </div>
// }

/*
<div id="info block">
    <h3>Mode: {this.state.mode}</h3>
    <h3>Score: <span>{snake.body.length + 1}</span></h3>

</div>
*/
