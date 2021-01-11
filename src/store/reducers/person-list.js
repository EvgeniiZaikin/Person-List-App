import { SET_PERSON_LIST } from '../actions/person-list';

export default (state = { list: [] }, { type, payload }) => {
    switch (type) {
        case SET_PERSON_LIST:
            return { ...state, list: payload };
        default:
            return { ...state };
    }
};
