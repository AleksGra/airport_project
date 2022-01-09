import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import SearchForm from './flights/components/searchForm/SearchForm';
import FlightTable from './flights/components/flightTable/FlightTable';
import Header from './flights/components/header/Header.jsx';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <SearchForm />
            <FlightTable />
          </>
        }
      >
        <Route path='departures' element={<FlightTable />} />
        <Route path='arrivals' element={<FlightTable />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
