import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import './FlightTable.scss';
import Navigation from './Navigation';
import * as flightsAction from '../../flight.actions';
import TableItem from './TableItem';
import getListToRender from '../../renderListData';
import { useLocation } from 'react-router-dom';

const FlightTable = ({ getFlights, flightsList }) => {
  const [listToRender, setListToRender] = useState([]);
  useEffect(() => {
    getFlights();
  }, []);
  let location = useLocation();
  let destination = location.pathname;
  let direction;
  switch (destination) {
    case '/arrivals':
      direction = 'arrival';
      break;
    case '/departures':
      direction = 'departure';
      break;
    default:
      direction = 'departure';
  }

  const searchText = useSelector((state) => state.text.text);
  useEffect(() => {
    setListToRender(getListToRender({ flightsList, direction, searchText }));
  }, [flightsList, direction, searchText]);

  return (
    <section className='flights-table'>
      <Navigation />
      {listToRender.length <= 0 ? (
        <div className='noting-found'>No flights</div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Terminal</td>
              <td>Local time</td>
              <td>Destination</td>
              <td>Status</td>
              <td>Airline</td>
              <td>Flight</td>
            </tr>
          </thead>

          <tbody>
            {listToRender.map((flight) => (
              <TableItem key={flight.ID} {...flight} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

const mapState = (state) => ({
  flightsList: state.flights,
});
const mapDispatch = {
  getFlights: flightsAction.getFlightsList,
};

export default connect(mapState, mapDispatch)(FlightTable);
