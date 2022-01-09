import React, { useState } from 'react';
import './header.scss';
import ForPassenger from './ForPassenger.jsx';
import IevService from './IevServise.jsx';

const Header = () => {
  const [showForPassenger, setShowForPassenger] = useState(false);
  const [showIevService, setShowIevService] = useState(false);
  return (
    <div className='header'>
      <div className='header__logo'>
        <img
          src='https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png'
          alt='headerLogo'
        />
        <ul className='header__menu'>
          <li className='header__menu-item'>
            <a
              onClick={() => {
                setShowForPassenger(!showForPassenger);
                setShowIevService(false);
              }}
            >
              For Passenger
            </a>
            {showForPassenger && <ForPassenger />}
          </li>

          <li className='header__menu-item'>
            <a
              onClick={() => {
                setShowIevService(!showIevService);
                setShowForPassenger(false);
              }}
            >
              IEV Services
            </a>
            {showIevService && <IevService />}
          </li>
          <li className='header__menu-item'>VIP</li>
          <li className='header__menu-item'>Corporate</li>
          <li className='header__menu-item'>Press Room</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
