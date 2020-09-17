import { SET_PERSON_LIST } from '../actions/types';

const initialState = {
    photo: '',
    name: '',
    surname: '',
    gender: '',
    email: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PERSON_LIST:
            return { ...state, ...payload };
        default:
            return { ...state };
    }
};
