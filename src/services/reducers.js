import peopleReducer from './candidate/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    people : peopleReducer
})