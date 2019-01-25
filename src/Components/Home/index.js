import React, { Component } from 'react';
import '../../App.css';
import Greeting from './Greeting'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount=()=> {

  }
  componentWillUnmount =()=> {
    
  }
  render(){
      return (
        <div>
        <Greeting moun = {this.props.unmount} id='greeting'></Greeting>
        </div>
      )
  }
}
