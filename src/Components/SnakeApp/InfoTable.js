import React, { Component } from 'react';
import '../../App.css';
import './style.scss';

export default class InfoTable extends Component {
  constructor(props){
    super(props);

    // apple.length = this.props.boostCount;
    // apple.fill('apple-i')
    this.state = {
        apple: [],
        buttonsMode:[
          {name:'easy', speed:900},
          {name:'medium', speed: 600},
          {name:'hard', speed:300}
        ],
        showButon: false,
        difficulty: '',

    }
  }
  componentDidMount = () => {

      document.getElementById('showButtons').addEventListener('mouseover', this.showButtons)
  }
  componentWillUnmount = () => {

      document.getElementById('showButtons').removeEventListener('mouseover', this.showButtons)
  }
  showButtons = (e) => {
    if(e.target.dataset.id === 'showButon'){
      return this.setState({
        showButon: true
      })
    }
    return
  }
  gameStart= () => {
    this.setState({
      showButon: !this.state.showButon,

    })
    return this.props.gameOver(false)
  }
  changeSpeed = (e) => {
      this.state.buttonsMode.map(item=> {
        if(item.name === e.target.name) {
          this.props.updateBaseSpeed(item.speed)
          return this.props.changeSpeed(item.speed)
        }
      })

      return this.setState({
        difficulty: e.target.name,
        showButon: !this.state.showButon,
    })

  }
  updateApples = (apple = []) => {
    if(apple.length < this.props.boostCount){
      apple.length = this.props.boostCount;
      apple.fill('apple-i')
    }
    return apple.map((i, ind)=> <div className={i} key={ind} ></div>)
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    this.updateApples()
    if(prevProps.boostCount < this.props.boostCount) {
      // console.log(this.props.boostCount)
    }
  }
  render(){
    return (
      <div  id='showButtons' className="wraper">
        <div className='info'>
          <div className="scoreBlock">
            <h3>Score: {this.props.score}</h3>
            <h3>Max score : {this.props.maxScore}</h3>
            <h3>Time boost: {this.props.timeBoost}</h3>
            <h3>Boost: {this.props.boost === '1' ? 'Available' : 'Not available'}</h3>
            <div className='appleshow'>{
                this.props.boost !== '1'
                ? this.updateApples() :
                <span>Press space to activate Boost (Speed x2)</span>
              }</div>
          </div>
          <div className='speedBlock'>
            <h3   data-id='showButon'>Speed: { this.state.difficulty === '' ? 'Easy' : this.state.difficulty.replace(this.state.difficulty[0], this.state.difficulty[0].toUpperCase())}</h3>
              {
                 !this.state.showButtons
                 ?  <div id='buttons' className='mode'>
                       {
                         this.state.buttonsMode.map(item=>{
                           return (
                             (this.state.showButon && !this.props.start)
                             ?
                             <button
                             key={item.speed}  id={item.name}
                             name={item.name} onClick={this.changeSpeed}
                             className='button_speed'

                             >
                             {item.name.replace(item.name[0], item.name[0].toUpperCase())}
                             </button>
                             : ''
                           )
                         })
                       }

                   </div>
                   : ''
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
