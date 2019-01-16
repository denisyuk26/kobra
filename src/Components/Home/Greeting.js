import React, { Component } from 'react';
import '../../App.css';
let pos = 0;
export default class Greeting extends Component {
  constructor(props){
    super(props)
    // this.greet = this.greeting.bind(this)
    // this.moveDown = this.moveDown.bind(this)
  }

  greeting = () =>{
    let br = 1;
    let atom = 2;
    let txt = `${atom}Hello Visitor!${atom} ${br} Greet to see You! ${br} ✌️✌️✌️`.split("");
    let interval = setInterval( () => {
      let out = document.getElementById('Text-show');
      (!txt[0]) ? clearInterval(interval) : out.innerHTML += txt.shift().replace(/1/gi, '<br />').replace(/[2]/gi, '<span class="Atom">⚛️</span>')
    }, 50);
    return;
  }
  moveDown = ()=> {
    let s = document.getElementById("greet");
    let n = document.getElementById('short-info')
    window.scrollTo(0,n.offsetTop)

  }
  render(){
      return (
        <div id='greet'>
          <div className = "greeting text" >
            <p id="Text-show"></p>
          </div>
        </div>
      )
  }
  componentDidMount(){
    this.greeting()
    // window.addEventListener('scroll', this.moveDown);
  }
}
