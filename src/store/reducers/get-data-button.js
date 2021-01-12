import actions from '@actions';
const { getDataButton: { SHOW_GET_DATA_BUTTON } } = actions;

const initialState = {
    show: true,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_GET_DATA_BUTTON:
            return { ...state, show: payload };
        default:
            return { ...state };
    }
};
