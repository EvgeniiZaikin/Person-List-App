import { SHOW_PERSON_INFO_BLOCK } from '../actions/types';

export default (state = { show: false }, { type, payload }) => {
    switch (type) {
        case SHOW_PERSON_INFO_BLOCK:
            return { ...state, show: payload };
        default:
            return { ...state };
    }
};
