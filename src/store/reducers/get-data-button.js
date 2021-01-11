import { SHOW_GET_DATA_BUTTON } from '../actions/get-data-button';

export default (state = {show: true}, { type, payload }) => {
    switch (type) {
        case SHOW_GET_DATA_BUTTON:
            return { ...state, show: payload };
        default:
            return { ...state };
    }
};
