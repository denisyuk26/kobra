import React, { Component } from 'react';

export const arr = ['Home', 'About', 'Contacts'];
let i = 1;
export default function MenuItems () {
    const item = arr.map(item=>
      <li key={i++} className='menu-item'>
        <a href={item}>{item}</a>
      </li>
    );
      return (<ul>{item}</ul>)
}
