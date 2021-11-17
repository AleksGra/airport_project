import { TAKE_INPUT_TEXT } from './flight.actions';

const initialState = {
  text: '',
};
const searchTextReducer = (state = initialState, action) => {
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

export default searchTextReducer;
