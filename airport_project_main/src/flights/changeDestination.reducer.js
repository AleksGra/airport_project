import { CHANGE_DESTINATION } from './flight.actions';

const initialState = {
  destination: 'departure',
};
const destinationReducer = (state = initialState, action) => {
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

export default destinationReducer;
