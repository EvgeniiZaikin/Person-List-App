import { combineReducers } from 'redux';

import getDataButton from './get-data-button';
import loader from './loader';
import personInfo from './person-info';
import personList from './person-list';

export default combineReducers({
    getDataButton,
    loader,
    personInfo,
    personList,
});
