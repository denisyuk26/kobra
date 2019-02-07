import React, { Component } from "react";

import styles from "./reactkobra.module.css";

export default class ReactKobra extends Component {
  constructor(props) {
    super(props);
    const grid = [...Array(19).keys()].map((_, row) => {
      return [...Array(19)].map((_, col) => {
        return {
          row: row,
          col: col
        };
      });
    });
    this.state = {
      grid,
      apple: {
        row: Math.floor(Math.random() * 19),
        col: Math.floor(Math.random() * 19)
      },
      snake: {
        head: {
          row: 9,
          col: 9
        },
        direction: {
          x: 1,
          y: 0
        },
        body: []
      },
      startAgain: false,
      boostKeyIsPressed: false
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      this.setDirection(e);
      this.initBoostSpeed(e);
    });
  }

  componentDidUpdate(prevProps) {
    const { snake, apple } = this.state;
    const eat = apple.row === snake.head.row && apple.col === snake.head.col;
    if (prevProps.gameStarted === !this.props.gameStarted) {
      this.startGame();
    }
    //this condition help us to know when snake eat apple, then re-render apple immediately
    if (eat) {
      this.setState({
        snake: {
          ...snake,
          body: [...snake.body, snake.head]
        },
        apple: this.appleEat()
          ? {
              row: Math.floor(Math.random() * 19),
              col: Math.floor(Math.random() * 19)
            }
          : apple
      });
    }
    //update apples count for boost
    if (eat && !this.props.boost && !this.state.boostKeyIsPressed) {
      this.props.updateBoostCount(this.props.boostCount - 1);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", e => {
      this.setDirection(e);
      this.initBoostSpeed(e);
    });

    clearInterval(this.boostInterval);
    clearTimeout(this.gameTimeOut, this.boostTimeout);
  }

  /* methods for settings (

  setSpeed()
   * if snake eat apple, decrease this.props.speed by 20 every time,
   * the smallest speed is 30,
   * if in boost mode snake eat apple,  speed don't change. It always equal to the value    this.props.speed after pressed the 'Space' key
   * return num for setInterval
  initBoostSpeed()
    * if "Space" key pressed and the props boost is 1, divided props.speed by 2,
    * after 5000 ms speed change on speed before activated boost
  updateBoostStatus()
    * update props boostCount every time when snake eat apple
    * if props boostCount equal 0, refresh boostCount to default value (3)
  startGame()
    * if props gameOver true do nothing
    * else we have 2 callback in setState,
     ** 1st callback generate new state for snake head, snake body and apple and if snake don't eat apple we delete last element of snake body array, else return new state
     ** 2nd callback check if game is over  or if snake eat self update props for generate gameOver, else run setInterval with methods updateBoostStatus() startGame(), which update every setSpeed()
   setDirection()
    * set state snake.direction depended on key is pressed
    * if direction x or y is 1 and user try to change it to -1 return false
   gameOver()
    * check if snake head coordinates less or bigger than coordinates of col/row grid update props gameOver, start, and check send score for check is it bigger than previous
   startAgain()
    * change setting to default and start game again
  */

  setSpeed = () => {
    if (this.props.speed < 30) {
      this.props.updateSpeed(30);
    }
    if (this.appleEat()) {
      this.props.updateSpeed(this.props.speed - 20);
      if (this.appleEat() && this.state.boostKeyIsPressed) {
        this.props.updateSpeed(this.props.speed);
      }
    }
    return this.props.speed;
  };

  initBoostSpeed = event => {
    const { boost, updateBoostStatus } = this.props;
    if (event.key === " " && boost && !this.props.gameOver) {
      updateBoostStatus(false);
      const speed = this.props.speed;
      this.props.updateSpeed(this.props.speed / 2);
      this.setState({ boostKeyIsPressed: true });
      this.boostInterval = setInterval(() => {
        let time = this.props.timeBoost;
        if (!this.props.gameOver) this.props.updateBoostTime(time - 1);
      }, 1000);
      this.boostTimeout = setTimeout(() => {
        this.props.updateSpeed(speed);
        this.setState({
          boostKeyIsPressed: false
        });
        clearInterval(this.boostInterval);
      }, 5000);
    }
  };
  updateBoostStatus = () => {
    if (this.props.boostCount === 0) {
      this.props.updateBoostCount(3);
      this.props.updateBoostTime(5);
      return this.props.updateBoostStatus(true);
    }
    return false;
  };

  startGame = () => {
    if (this.props.gameOver) return;
    this.props.updateStartStatus(true);
    this.setState(
      ({ snake, apple }) => {
        const eat = this.appleEat();
        const nextState = {
          snake: {
            ...snake,
            head: {
              row: snake.head.row + snake.direction.y,
              col: snake.head.col + snake.direction.x
            },
            body: [snake.head, ...snake.body]
          },
          apple: this.appleEat()
            ? {
                row: Math.floor(Math.random() * 19),
                col: Math.floor(Math.random() * 19)
              }
            : apple
        };
        if (!eat) nextState.snake.body.pop();
        return nextState;
      },
      () => {
        const { snake } = this.state;
        if (this.gameOver() || this.isSnakeBody(snake.head)) {
          this.props.updateStartStatus(false);
          this.props.setGameOver(true);
          this.props.setMaxScore(snake.body.length);
          return;
        }
        this.gameTimeOut = setTimeout(() => {
          this.updateBoostStatus();
          this.startGame();
        }, this.setSpeed());
      }
    );
  };
  moveSnakeHead = () => {
    const { snake } = this.state;
    if (snake.direction.y === -1) {
      return styles.move_up;
    } else if (snake.direction.x === 1) {
      return styles.move_right;
    } else if (snake.direction.y === 1) {
      return styles.move_down;
    } else if (snake.direction.x === -1) {
      return styles.move_left;
    }
  };
  moveSnakeBody = () => {
    const { snake } = this.state;
    if (snake.body.length !== 0) {
      if (snake.direction.y === -1 && snake.head.col === snake.body[0].col) {
        return styles.move_body_up;
      } else if (
        snake.direction.x === 1 &&
        snake.head.row === snake.body[0].row
      ) {
        return styles.move_body_right;
      } else if (
        snake.direction.y === 1 &&
        snake.head.col === snake.body[0].col
      ) {
        return styles.move_body_down;
      } else if (
        snake.direction.x === -1 &&
        snake.head.row === snake.body[0].row
      ) {
        return styles.move_body_left;
      }
    }
  };

  setDirection = e => {
    const { snake } = this.state;
    if (e.key === "ArrowUp") {
      if (snake.direction.y === 1) return;
      this.setState(({ snake }) => ({
        snake: {
          ...snake,
          direction: {
            x: 0,
            y: -1
          }
        }
      }));
    } else if (e.key === "ArrowRight") {
      if (snake.direction.x === -1) return;
      this.setState(({ snake }) => ({
        snake: {
          ...snake,
          direction: {
            x: 1,
            y: 0
          }
        }
      }));
    } else if (e.key === "ArrowDown") {
      if (snake.direction.y === -1) return;
      this.setState(({ snake }) => ({
        snake: {
          ...snake,
          direction: {
            x: 0,
            y: 1
          }
        }
      }));
    } else if (e.key === "ArrowLeft") {
      if (snake.direction.x === 1) return;
      this.setState(({ snake }) => ({
        snake: {
          ...snake,
          direction: {
            x: -1,
            y: 0
          }
        }
      }));
    }
  };

  gameOver = () => {
    const { snake } = this.state;
    if (
      snake.head.col < 0 ||
      snake.head.row < 0 ||
      snake.head.col > 18 ||
      snake.head.row > 18
    ) {
      this.props.setGameOver(true);
      this.props.updateStartStatus(false);
      this.props.setMaxScore(snake.body.length);
      return true;
    }
    return false;
  };

  startAgain = e => {
    this.props.updateSpeed(this.props.baseSpeed);
    this.props.updateBoostCount(3);
    this.props.updateBoostStatus(true);
    this.props.setGameOver(false);
    this.props.updateStartStatus(true);
    this.props.updateBoostTime(5);
    this.setState(({ snake, startAgain }) => {
      return {
        startAgain: true,
        snake: {
          head: {
            col: 9,
            row: 9
          },
          body: [],
          direction: {
            x: 1,
            y: 0
          }
        }
      };
    });
  };

  /* methods for apple (
  getAppleOnField() generate random apple on field,
  isApple() check apple.row and apple.col with grid coordinates,
  appleEat() check apple.row and apple.col with snake.head coordinates)
  */

  isApple = cell => {
    const { apple } = this.state;
    return cell.row === apple.row && cell.col === apple.col ? styles.apple : "";
  };

  appleEat = () => {
    const { apple, snake } = this.state;
    this.props.updateScore(snake.body.length);
    return apple.row === snake.head.row && apple.col === snake.head.col;
  };

  /* methods for snake head and snake body (
  isSnakeHead() check snake.head.row and snake.head.col with grid coordinates,
  isSnakeBody() tail is array with obj ({col: value, row: value}) I check if coordinates of snake.body equal with grid coordinates return true ,
  */

  isSnakeHead = cell => {
    const { snake } = this.state;
    return cell.row === snake.head.row && cell.col === snake.head.col
      ? `${styles.snake}, ${styles.head}`
      : "";
  };

  isSnakeBody = cell => {
    const { snake } = this.state;
    return snake.body.find(
      inBody => inBody.row === cell.row && inBody.col === cell.col
    );
  };

  createGridForSnake = () => {
    const { grid } = this.state;
    return grid.map(row =>
      row.map(cell => (
        <div
          key={`${cell.row} ${cell.col}`}
          className={`${styles.cell} ${
            this.isSnakeHead(cell)
              ? `${styles.head} ${this.moveSnakeHead()}`
              : this.isApple(cell)
              ? styles.apple
              : this.isSnakeBody(cell)
              ? `${styles.body} ${this.moveSnakeBody()}`
              : ""
          }`}
        />
      ))
    );
  };

  showModalWindow = () => {
    const { startAgain } = this.state;
    return (
      <div className={styles.modal}>
        <button onClick={this.startAgain} id={styles.start}>
          {startAgain ? "Start Again" : "Start game"}
        </button>
      </div>
    );
  };

  render() {
    return (
      <div id={styles.snake} tabIndex="0" onKeyPress={this.setDirection}>
        <section id={styles.grid}>{this.createGridForSnake()}</section>
        <div>{this.props.gameOver ? this.showModalWindow() : null}</div>
      </div>
    );
  }
}
