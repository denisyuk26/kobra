import React from 'react';
import {Link} from 'react-router-dom'

export const arr = ['Home', 'Game'];
let i = 1;
export default function MenuItems () {
    const item = arr.map(item=>
      <li key={i++} className='menu-item'>
        <Link to={`${item}`}>{item}</Link>
      </li>
    );
      return (<ul>{item}</ul>)
}
