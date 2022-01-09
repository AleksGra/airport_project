import React from 'react';
import './forPassenger.scss';
const ForPassenger = () => {
  const items = [
    'COVID-19',
    'Before flight',
    'Aviation security',
    'Customs control',
    'Border control',
    'For passengers with disabilities',
    'Traveling with animals',
    'Airport map',
    'Feedback form',
    'Contacts',
  ];
  return (
    <div className='container'>
      <ul className='forPassenger_list'>
        {items.map((item, index) => (
          <li className='forPassenger__items' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ForPassenger;
