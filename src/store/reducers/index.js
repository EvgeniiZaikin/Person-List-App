import { combineReducers } from "redux";

import getDataButton from './get-data-button';
import loader from './loader';
import personInfoScreen from './person-info-screen';
import personList from './person-list';

export default combineReducers({
    getDataButton,
    loader,
    personInfoScreen,
    personList,
});
