import React, { Component } from 'react';
import '../../App.css';
import './style.css';
export default class SnakeGame extends Component {
  constructor(props){
    super(props)
    const grid = [];
    for(let row = 0; row < 19; row++){
      let cols = [];
      for(let col = 0; col < 19; col++){
         cols.push({ row, col })
      }
      grid.push(cols)
    }
    this.state = {

      grid,
      playing: false,
      apple: {
        row: Math.floor(Math.random() * 19),
        col: Math.floor(Math.random() * 19),
      },
      snake: {
        head: {
          row: 9,
          col: 9
        },
        direction: {
          x: 1,
          y: 0,
        },
        body: [],
      },
      score: 0,
    }
  }
  componentDidMount = () => {
    document.addEventListener('keydown', (e)=> {
      this.setDirection(e)
    });
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if(prevProps.start === !this.props.start){
       this.gameStart();
    }
  }
  gameStart = () => {
    if(this.state.gameOver) return;
    this.props.playing(true)
    this.setState(({snake, apple, playing})=> {
      const eat = this.appleEat();
      const nextState = {
        playing:true,
        snake: {
          ...snake,
          head: {
            row: snake.head.row + snake.direction.y,
            col: snake.head.col + snake.direction.x,
          },
          body: [snake.head, ...snake.body]
        },
        apple: eat ? {
          row: Math.floor(Math.random() * 19),
          col: Math.floor(Math.random() * 19),
        } : apple
      }
      if(!eat) nextState.snake.body.pop();
      return nextState
    }, () => {
      const {snake, playing} = this.state;
      if(this.gameOver() || this.isTail(snake.head)){
        this.props.playing(false)
        this.setState({
          gameOver: true,
          playing:false,

        })

        return;
      }
      setTimeout(()=>{
        this.gameStart();
      }, this.state.snake.body.length ? (this.props.speed / (this.state.snake.body.length + 1) ) + 100 : this.props.speed);
    });
  }



  getAppleOnField = () => {
    const {snake} = this.state;
    const newApple = {
      row: Math.floor(Math.random() * 19),
      col: Math.floor(Math.random() * 19),
    };
    if(this.isTail(newApple) || (snake.head.row === newApple.row && snake.head.col === newApple.col)) {
      return this.getAppleOnField();
    }else {
      return newApple
    }

  }
  gameOver  = () => {
    const {snake} = this.state;
    if (snake.head.col < 0
      ||snake.head.row < 0
      ||snake.head.col > 18
      ||snake.head.row > 18)
      {
      this.props.gameOver(true)
      this.props.maxScore(snake.body.length)
      return true
      }
      return false

  }

  appleEat = () => {
    const {apple, snake} = this.state;
    this.props.score(snake.body.length);
    return apple.row === snake.head.row && apple.col === snake.head.col;
  }
  setDirection  = (e) => {
    const {snake} = this.state;
    if(e.keyCode === 40){
      if(snake.direction.y === -1) return;
      this.setState( ({snake}) => ({
        snake: {
          ...snake,
          direction: {
            x: 0,
            y: 1,
          }
        }
      }))
    }
    else if(e.keyCode === 39){
      if(snake.direction.x === -1) return;
      this.setState( ({snake}) => ({
        snake: {
          ...snake,
          direction: {
            x: 1,
            y: 0,
          }

        }
      }))
    }
    else if(e.keyCode === 38){
      if(snake.direction.y === 1) return;
      this.setState( ({snake}) => ({
        snake: {
          ...snake,
          direction: {
            x: 0,
            y: -1,
          }
        }
      }))
    }
    else if(e.keyCode === 37){
      if(snake.direction.x === 1) return;
      this.setState( ({snake}) => ({
        snake: {
          ...snake,
          direction: {
            x: -1,
            y: 0,
          }
        }
      }))
    }
  }
  isSnake = (cell)=> {
    const {snake} = this.state;
    return cell.row === snake.head.row && cell.col === snake.head.col ? 'snake head' : ''
  }
  isApple = (cell) => {
        const {apple} = this.state;
        return cell.row === apple.row && cell.col === apple.col ? 'apple' : '';
      }
  isTail = (cell)=> {
    const {snake} = this.state;
    return snake.body.find(inBody => inBody.row === cell.row && inBody.col === cell.col)
  }

  startAgain = (e) => {
    this.setState( ({snake, gameOver}) => {
            return ({
              playing: false,
              gameOver: false,
              snake:{
                head: {
                  col: 9,
                  row: 9
                },
                body: [],
                direction: {
                  x: 1,
                  y: 0,
                }
              }
            }

          )
        })
        this.props.gameOver(false)
  }

  render(){
    const {grid, snake, gameOver, playing} = this.state;
    return (
      <div id="snake" tabIndex = "0" onKeyPress={this.setDirection}>
        {
          gameOver
          ? (
            <div>
              <button onClick={this.startAgain} id='startAgain'>Play Again</button>
            </div>
          )
          : <div>

              <section id='grid'>
                    {
                      this.state.grid.map( row => (
                        row.map( cell => (
                          <div
                            key={`${cell.row} ${cell.col}`}
                            className={`cell ${
                              this.isSnake(cell)
                              ?'head':this.isApple(cell)
                              ? 'apple' : this.isTail(cell)
                              ? 'tail' : ''
                            }`}>
                          </div>
                        ))
                      ))
                    }

                </section>
                {
                  playing
                  ? ''
                  : <button onClick={this.gameStart} id='startAgain' >Start game</button>
                }
            </div>
        }
      </div>
    )

  }


}
