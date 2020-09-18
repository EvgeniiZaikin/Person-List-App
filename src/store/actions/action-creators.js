import axios from 'axios';

import { TOGGLE_LOADER, SET_PERSON_LIST, SET_PERSON_INFO, SHOW_GET_DATA_BUTTON, SHOW_PERSON_INFO_BLOCK } from './types';

export const toggleLoader = status => ({ type: TOGGLE_LOADER, payload: status });

export const setPersonList = () => dispatch => {
    // 2500 delay is only for example
    setTimeout(async () => {
        console.log('SET PERSON LIST dispatch');

        try {
            const { data } = await axios.get('https://randomuser.me/api/?seed=foobar&results=15&page=1', {
                headers: {
                    'Access-Control-Allow-Origin': 'Origin',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Methods' : 'GET',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                proxy: {
                    host: '104.236.174.88',
                    port: 3128
                },
                crossdomain: true,
            });
            const { results, error } = data;
            dispatch({ type: SET_PERSON_LIST, payload: error ? [] : results });
        } catch (exception) {
            dispatch({ type: SET_PERSON_LIST, payload: [] });
        }
        console.log('AFTER SET PERSON LIST dispatch');
        dispatch(toggleLoader(false));
        dispatch(showGetDataButton(false));
    }, 2500);
};

export const showGetDataButton = show => ({ type: SHOW_GET_DATA_BUTTON, payload: show });

export const togglePersonInfoBlock = show => ({ type: SHOW_PERSON_INFO_BLOCK, payload: show });

export const setPersonInfo = info => ({ type: SET_PERSON_INFO, payload: info });
