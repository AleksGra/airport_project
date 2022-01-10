import React from 'react';
import './forPassenger.scss';
import { forPassengerItems } from './menuData';

const ForPassenger = () => {
  return (
    <div className='container'>
      <ul className='forPassenger_list'>
        {forPassengerItems.map((item, index) => (
          <li className='forPassenger__items' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ForPassenger;
