import actions from '@actions';
const { loader: { TOGGLE_LOADER } } = actions;

const initialState = {
    laoder: false,
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case TOGGLE_LOADER:
            return { ...state, loader: payload };
        default:
            return { ...state, loader: false };
    }
};
