import React, { Component } from 'react';
import Header from '../Header';
import Home from '../Home';
import Snake from '../SnakeApp'
import {HashRouter , Route, Switch} from 'react-router-dom'


export default class RouterGo extends Component {

  componentWillUnmount(){

  }
  render (){


    return (
      <HashRouter  >

        <div>
          <Header ></Header>
          <main>
            <Switch>
              <Route path='/game' component={Snake}/>
              <Route path='/' component={Home}/>
            </Switch>


          </main>


        </div>

      </HashRouter >
    )
  }
}
