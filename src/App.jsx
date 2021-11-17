import React from 'react';
import { Provider } from 'react-redux';
import './index.scss';
import FlightTable from './flights/components/flightTable/FlightTable';
import store from './store';

const App = () => (
  <Provider store={store}>
    <FlightTable />
  </Provider>
);

export default App;
