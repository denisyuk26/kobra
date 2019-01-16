import React, { Component } from 'react';
import '../../App.css';
import './style.css';

export default class InfoTable extends Component {
  constructor(props){
    super(props);
    this.state = {
        buttonsMode:[{name:'easy', speed:900}, {name:'medium', speed: 600}, {name:'hard', speed:300}],
        showButon: true,
        difficulty: '',

    }
  }
  gameStart= () => {

    this.setState({
      showButon: !this.state.showButon,
    })
    return this.props.gameOver(false)
  }
  changeSpeed = (e) => {
    console.log(this.props.start)
      this.state.buttonsMode.map(item=> {
        if(item.name === e.target.name) {
          return this.props.changeSpeed(item.speed)
        }
      })
   return  this.setState({
      difficulty: e.target.name,
      showButon: !this.state.showButon,
    })

  }
  render(){
    return (
      <div>
      <h1>Score: {this.props.score}</h1>
      <h1>Max: {this.props.maxScore}</h1>
      <h1>Mode: { this.state.difficulty === '' ? 'Easy' : this.state.difficulty.replace(this.state.difficulty[0], this.state.difficulty[0].toUpperCase())}</h1>

      <div id='buttons'>


        <div className='mode'>

          {
            this.state.buttonsMode.map(item=>{


              return (
                !this.props.start
                ?
                <button
                key={item.speed}  id={item.name}
                name={item.name} onClick={this.changeSpeed}

                >
                {item.name.replace(item.name[0], item.name[0].toUpperCase())}
                </button>
                : ''
              )
            })
          }

        </div>

      </div>

      </div>
    )
  }

}


  // <button className={`${ this.state.showButon ? 'show' : 'hide'}`} onClick={this.gameStart} id='start'>Start the game</button>
// <button  id='easy' name='easy' onClick={this.changeSpeed}>Easy</button>
// <button  id='medium' name='medium' onClick={this.changeSpeed}>Medium</button>
// <button  id='hard' name='hard' onClick={this.changeSpeed}>Hard</button>
