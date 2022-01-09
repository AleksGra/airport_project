import React from 'react';
import './forPassenger.scss';
const IevService = () => {
  const items = [
    'COVID-19 testing',
    'Priority line',
    'Express Line',
    'Business lounge',
    'VIP service',
    'Hotel IEV',
    'Transfer',
    'Baggage wrapping',
    'Long-term parking',
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
export default IevService;
