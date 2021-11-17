import { FLIGHTS_RECIEVED } from './flight.actions';

const initialState = {
  flights: [],
};
const flightReducer = (state = initialState, action) => {
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

export default flightReducer;
