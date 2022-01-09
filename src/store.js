import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchTextReducer, flightReducer } from './flights/flight.reducer';

const reducer = combineReducers({
  flights: flightReducer,
  text: searchTextReducer,
});
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
