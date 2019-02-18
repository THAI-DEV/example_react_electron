import { combineReducers } from 'redux';
import fbCounterReducerFn from './components/fb-counter/fb-counter-reducer';

const reducerStore = combineReducers({
  fbCounterReducer: fbCounterReducerFn
});

export default reducerStore;
