import { combineReducers } from 'redux';
import fbCounterReducerFn from '../components/fb-counter/fb-counter-reducer';

const reducerStore = combineReducers({
  // counterReducer: counterReducerFn,
  fbCounterReducer: fbCounterReducerFn
});

export default reducerStore;
