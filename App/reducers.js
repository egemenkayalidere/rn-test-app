import AppReducer from './redux/app-redux/reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  AppReducer,
});

export default allReducers;
