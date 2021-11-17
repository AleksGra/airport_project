import { fetchFlightsList } from './flightGateway';

export const FLIGHTS_RECIEVED = 'FLIGHTS_RECIEVED';
export const CHANGE_DESTINATION = 'CHANGE_DESTINATION';
export const TAKE_INPUT_TEXT = 'TAKE_INPUT_TEXT';

export const flightsRecieved = flightsList => ({
  type: FLIGHTS_RECIEVED,
  payload: {
    flightsList,
  },
});

export const changeDistanation = destination => ({
  type: CHANGE_DESTINATION,
  payload: { destination },
});

export const takeInputText = text => ({
  type: TAKE_INPUT_TEXT,
  payload: {
    text,
  },
});

export const getFlightsList = () => {
  const thunkAction = dispatch => {
    fetchFlightsList().then(flightsList => dispatch(flightsRecieved(flightsList.body)));
  };
  return thunkAction;
};
