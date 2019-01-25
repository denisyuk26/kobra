import React, { Component } from 'react';
import '../../App.css';
import './style.scss';

/*
// TODO:
  [] fix timeBoost
  [] fix updateBoost, need that it dont count apples when boost is ready or active
*/
export default class SnakeGame extends Component {
  /* constructor

    in constructor we use  two 'for' loops to generate grid, in first loop we fill the row prop of grid cell, in second loop we fill col prop of the same cell,
    finaly we get cell as {row: value. col: value} and push in into const gridm then push it in the state;
  */
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
      startAgain: false,
      isPressed: false,
    }
  }
  componentDidMount = () => {
    document.addEventListener('keydown', (e)=> {
      this.setDirection(e);
      this.boostSpeed(e);

    });

  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if(prevProps.start === !this.props.start){
       this.gameStart();
    }

  }
  componentWillUnmount = () => {
    document.removeEventListener('keydown', (e)=> {
      this.setDirection(e);
      this.boostSpeed(e);

    });
 }
  /* methods for settings (

  setSpeed()
   * if snake eat apple, decrease this.props.speed by 20 every time,
   * the smalest speed is 30,
   * if in boost mode snake eat apple,  speed don't change. It always equal to the value    this.props.speed after pressed the 'Space' key
   * return num for setInterval
  boostSpeed()
    * if "Space" key pressed and the props boost is 1, divided props.speed by 2,
    * after 5000 ms speed change on speed before activated boost
  updBoost()
    * update props boostCount every time when snake eat apple
    * if props boostCount equal 0, refresh boostCount to default value (3)
  gameStart()
    * if props gameOver true do nothing
    * else we have 2 callback in setState,
     ** 1st callback generate new state for snake head, snake body and apple and if snake don't eat apple we delete last element of snae body array, else return new state
     ** 2nd callback check if game is over  or if snake eatself update props for generate gameOver, else run setInterval with methods updBoost() gameStart(), which update every setSpeed()
   setDirection()
    * set state snake.direction depended on key is pressed
    * if direction x or y is 1 and user try to change it to -1 return false
   gameOver()
    * check if snake head coordinates less or bigger than coordinates of col/row grid update props gameOver, start, and check send score for check is it bigger than previous
   startAgain()
    * change setting to default and start game again
  */
  setSpeed = () => {
    if(this.props.speed < 30) {
      this.props.changeSpeed(30);
    }
    if(this.appleEat()) {
      this.props.changeSpeed(this.props.speed - 20)
      if(this.appleEat() && this.state.isPressed) {
        this.props.changeSpeed(this.props.speed)
      }
    }

      return this.props.speed
  }
  boostSpeed = (event) => {
    const {boost, updateBoost} = this.props;
    if(event.code === 'Space' && /[1]/gi.test(boost)) {



      updateBoost('0');
      const speed = this.props.speed;
      this.props.changeSpeed(this.props.speed / 2);
      this.setState({isPressed: true});
      let interval = setInterval(()=> {
        let time = this.props.timeBoost;
        this.props.updateTimeBoost(time-1)
      }, 1000)
      if(!this.state.isPressed) {
        return interval
      }


      setTimeout(()=> {
        this.props.changeSpeed(speed)
        clearInterval(interval)
        return this.setState({isPressed: false})

      }, 5000)

    }
    return
  }
  updBoost = () => {
    if(this.appleEat() && this.props.boost === '0') {
      this.props.updateCount(this.props.boostCount - 1)
      return
    }
    if( this.props.boostCount === 0 && this.props.boost === '1') {
        this.props.updateCount(3)
        this.props.updateTimeBoost(5)
       return this.props.updateBoost('1');
    }
    return false
  }
  gameStart = () => {
    if(this.props.gameOver) return;
    this.props.updateStart(true)
    this.setState(
      ({snake, apple})=> {
      const eat = this.appleEat();
      const nextState = {
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
      },
      () => {
      const {snake} = this.state;

      if(this.gameOver() || this.isTail(snake.head)){
        this.props.updateStart(false);
        this.props.isGameOver(true);
        this.props.isMaxScore(snake.body.length);
        clearInterval(this.gameStart());
        clearInterval(this.updBoost());
        return;
      }
      setTimeout(()=>{
        this.updBoost();
        this.gameStart();
        },
      this.setSpeed());
    });
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
  gameOver  = () => {
    const {snake} = this.state;
    if (snake.head.col < 0
      ||snake.head.row < 0
      ||snake.head.col > 18
      ||snake.head.row > 18)
      {
      this.props.isGameOver(true)
      this.props.updateStart(false);
      this.props.isMaxScore(snake.body.length)
      return true
      }
    return false

  }
  startAgain = (e) => {
    this.props.changeSpeed(this.props.baseSpeed)
    this.props.updateCount(3)
    this.props.updateBoost('1')
    this.props.isGameOver(false)
    this.props.updateStart(true);
    this.props.updateTimeBoost(5)
    this.setState( ({snake, startAgain}) => {
            return ({
              startAgain: true,
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
  }
  /* methods for apple (
  getAppleOnField() generate random apple on field,
  isApple() check apple.row and apple.col with grid coordinates,
  appleEat() check apple.row and apple.col with snake.head coordinates)
  */
  getAppleOnField = () => {
    const {snake} = this.state;
    const newApple = {
      row: Math.floor(Math.random() * 19),
      col: Math.floor(Math.random() * 19),
    };
    if(this.isTail(this.state.apple) || (snake.head.row === this.state.apple.row && snake.head.col === this.state.apple.col)) {
      return this.getAppleOnField();
    }
      return this.setState({
        apple: newApple
      })


  }
  isApple = (cell) => {
        const {apple} = this.state;
        return cell.row === apple.row && cell.col === apple.col ? 'apple' : '';
      }
  appleEat = () => {
    const {apple, snake} = this.state;
    this.props.updateScore(snake.body.length);
    return apple.row === snake.head.row && apple.col === snake.head.col;
  }
  /* methods for snake head and snake body (
  isSnake() check snake.head.row and snake.head.col with grid coordinates,
  isTail() tail is array with obj ({col: value, row: value}) I check if coordinates of snake.body equal with grid coordinates return true ,
  */
  isSnake = (cell)=> {
    const {snake} = this.state;
    return cell.row === snake.head.row && cell.col === snake.head.col ? 'snake head' : ''
  }
  isTail = (cell)=> {
    const {snake} = this.state;

    return snake.body.find(inBody => inBody.row === cell.row && inBody.col === cell.col)
  }

  render(){
    const {grid, snake, gameOver} = this.state;
    return (
      <div id="snake" tabIndex = "0" onKeyPress={this.setDirection}>
        {
           <div id='gridWrap'>
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
                <div >
                  {
                    this.props.gameOver
                    ? (
                      <div className='modal'>
                        <button onClick={this.startAgain} id='start' >{this.state.startAgain ? "Start Again" :  'Start game'}</button>
                      </div>
                    )
                    : ''
                  }
                </div>
            </div>
        }
      </div>
    )
  }
}
