import React from 'react';
import './forPassenger.scss';
import { forIevServiceItems } from './menuData.js';
const IevService = () => {
  return (
    <div className='container'>
      <ul className='forPassenger_list'>
        {forIevServiceItems.map((item, index) => (
          <li className='forPassenger__items' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IevService;
