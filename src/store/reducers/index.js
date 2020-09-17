import { combineReducers } from "redux";

import getDataButton from './get-data-button';
import loader from './loader';
import personList from './person-list';

export default combineReducers({
    getDataButton,
    loader,
    personList,
});
