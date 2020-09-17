import { TOGGLE_LOADER, SET_PERSON_LIST } from './types';

export const toggleLoader = status => ({type: TOGGLE_LOADER, payload: status});

export const setPersonList = () => dispatch => {
    setTimeout(() => {
        console.log('SET PERSON LIST dispatch');
        dispatch({ type: SET_PERSON_LIST, payload: {} });
    }, 2500);
};
