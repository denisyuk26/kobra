import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterGo from './Components/Router/'
// import MenuItems from './Components/Header/MenuItems';
// import Header from './Components/Header';
// import Home from './Components/Home';
//
// import Snake from './Components/SnakeApp'





ReactDOM.render(
  <RouterGo basename={process.env.PUBLIC_URL}/>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
