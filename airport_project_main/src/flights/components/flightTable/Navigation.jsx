import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { useDispatch } from 'react-redux';
import { changeDistanation } from '../../flight.actions';

const Navigation = () => {
  const dispatch = useDispatch();
  const handler = dest => {
    dispatch(changeDistanation(dest));
  };

  return (
    <div className="navigation">
      <NavLink
        to="/departures"
        activeclassname="active"
        className="navigation__btn"
        onClick={() => handler('departure')}
      >
        <i className="fas fa-plane-departure "></i>
        DEPARTURES
      </NavLink>

      <NavLink
        to="/arrival"
        activeclassname="active"
        className="navigation__btn"
        onClick={() => handler('arrival')}
      >
        <i className="fas fa-plane-arrival"></i>
        ARRIVALS
      </NavLink>
    </div>
  );
};

export default Navigation;
