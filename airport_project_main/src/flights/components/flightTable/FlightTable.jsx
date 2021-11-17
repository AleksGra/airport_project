import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './FlightTable.scss';
import SerchForm from '../searchForm/SearchForm';
import Navigation from './Navigation';
import * as flightsAction from '../../flight.actions';
import TableItem from './TableItem';
import getListToRender from '../../renderListData';

const FlightTable = ({ getFlights, flightsList }) => {
  const [listToRender, setListToRender] = useState([]);

  useEffect(() => {
    getFlights();
  }, []);
  const direction = useSelector(state => state.destination.destination);
  const searchText = useSelector(state => state.text.text);
  useEffect(() => {
    setListToRender(getListToRender({ flightsList, direction, searchText }));
  }, [flightsList, direction, searchText]);

  return (
    <BrowserRouter>
      <SerchForm />
      <section className="flights-table">
        <Navigation />
        {listToRender.length <= 0 ? (
          <div className="noting-found">No flights</div>
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
              {listToRender.map(flight => (
                <TableItem key={flight.ID} {...flight} />
              ))}
            </tbody>
          </table>
        )}
      </section>
    </BrowserRouter>
  );
};

const mapState = state => ({
  flightsList: state.flights,
});
const mapDispatch = {
  getFlights: flightsAction.getFlightsList,
};

export default connect(mapState, mapDispatch)(FlightTable);
