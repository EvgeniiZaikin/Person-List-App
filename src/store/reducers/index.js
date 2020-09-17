import { combineReducers } from "redux";

import loader from './loader';
import personList from './person-list';

export default combineReducers({
    loader,
    personList,
});
