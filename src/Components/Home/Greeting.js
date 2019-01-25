import React, { Component } from 'react';
import '../../App.css';

export default class Greeting extends Component {
  constructor(props){
    super(props)
    this._isMounted = false;
    this.state = {
      showLetters: '',
    }
  }
  greeting = () =>{
    let atom = 2;
    let txt = `${atom}Hello Visitor!${atom} Greet to see You!✌️✌️✌️`.split("");
    return setInterval(() => {
      if(!txt[0]) return false
      this.setState((prevState)=> {
         return prevState.showLetters += txt.shift().replace(/[2]/gi, '⚛️')
      })
    }, 50);

  }
  componentDidMount = () => {
    this._isMounted = true;
    this.greeting()

  }
  componentWillUnmount = () => {
    this._isMounted = false;
  }

  render(){
      return (
        <div id='greet'>
          <div className = "greeting text" >{
            this._isMounted
            ? <p id="Text-show">{this.state.showLetters}</p>
            : ''
            }

          </div>
        </div>
      )
  }

}
