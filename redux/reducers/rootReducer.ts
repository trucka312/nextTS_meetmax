import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import counterReducer from './counterReducer';

export const rootReducer = combineReducers({
  account: accountReducer,
  counter: counterReducer,
});
