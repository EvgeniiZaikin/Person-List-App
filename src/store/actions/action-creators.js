import axios from 'axios';

import { TOGGLE_LOADER, SET_PERSON_LIST } from './types';

export const toggleLoader = status => ({type: TOGGLE_LOADER, payload: status});

export const setPersonList = () => dispatch => {
    setTimeout(async () => {
        console.log('SET PERSON LIST dispatch');

        try {
            const { data } = await axios.get('https://randomuser.me/api/?seed=foobar&results=15&page=1', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
            const { results, error } = data;
            dispatch({ type: SET_PERSON_LIST, payload: error ? [] : results });
        } catch (exception) {
            dispatch({ type: SET_PERSON_LIST, payload: [] });
        }
        console.log('AFTER SET PERSON LIST dispatch');
        dispatch({ type: TOGGLE_LOADER, payload: false });
    }, 2500);
};
