import React, { Component } from 'react';
import '../../App.css';
import Greeting from './Greeting'
import ShortInfo from './ShortInfo'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
      return (
        <div>
        <Greeting id='greeting'></Greeting>


        </div>
      )
  }
}
