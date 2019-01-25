import React, { Component } from 'react';
import MenuItems from './MenuItems.js';
// import Snake from '../SnakeApp'

import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <MenuItems />
        </header>
      </div>
    );
  }
}
export default Header;
