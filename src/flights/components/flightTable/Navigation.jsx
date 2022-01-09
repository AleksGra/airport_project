import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink
        to='departures'
        activeclassname='active'
        className='navigation__btn'
      >
        <i className='fas fa-plane-departure '></i>
        DEPARTURES
      </NavLink>

      <NavLink
        to='arrivals'
        activeclassname='active'
        className='navigation__btn'
      >
        <i className='fas fa-plane-arrival'></i>
        ARRIVALS
      </NavLink>
    </div>
  );
};

export default Navigation;
