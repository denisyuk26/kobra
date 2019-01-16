import React, { Component } from 'react';
import MenuItems from './MenuItems.js';
import Home from '../Home';
import Snake from '../SnakeApp'

import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Card">
        <header className="App-header">
            <MenuItems />
        </header>
        
        <Snake className="SnakeApp"></Snake>
      </div>
    );
  }
}
export default Header;
