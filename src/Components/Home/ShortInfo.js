import React, { Component } from 'react';
import '../../App.css';
import {arr} from "../Header/MenuItems.js"
let array = arr.slice();
export default class ShoInfo extends Component{
  constructor(props) {
    super(props)
    this.shortInfo = {
      title: [[1,'About me'], [2,'Contacts']],
      text: [[1,`Hello my name is Sergey Denisyuk , I\'m front-end developer. I started to study the React Library, and this site is representive some of my skills. If u want to know more info, follow link with`],[2,`If I have interested of you  follow link with`]]
    }

  }
  list = ()=> {

    array.splice(0,1)
    console.log( array)
    let item = array.map((i, id = 0)=>{
      if(this.shortInfo.title[id][0] !== id+1) {
        return false
      }
      return (<li className="short-item" key={id+1}>
          <h2>{this.shortInfo.title[id][1]}</h2>
          <p>{this.shortInfo.text[id][1]}  <a href={i}>details</a>.</p>
      </li>)
    })
    return item
  }
  render(){

    return (

        <div className='Info-wrap' id='short-info'>
            <ul>{this.list()}</ul>
        </div>
    )
  }
}
