import { FLIGHTS_RECIEVED } from './flight.actions';
import { TAKE_INPUT_TEXT } from './flight.actions';
import { CHANGE_DESTINATION } from './flight.actions';
const initialState = {
  flights: [],
};
export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_RECIEVED:
      return {
        ...state,
        flights: action.payload.flightsList,
      };
    default:
      return state;
  }
};

export const searchTextReducer = (
  state = {
    text: '',
  },
  action
) => {
  switch (action.type) {
    case TAKE_INPUT_TEXT:
      return {
        ...state,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

export const destinationReducer = (
  state = {
    destination: 'departure',
  },
  action
) => {
  switch (action.type) {
    case CHANGE_DESTINATION:
      return {
        ...state,

        destination: action.payload.destination,
      };
    default:
      return state;
  }
};
