import actions from '@actions';
const { personList: { SET_PERSON_LIST } } = actions;

const initialState = {
    list: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PERSON_LIST:
            return { ...state, list: payload };
        default:
            return { ...state };
    }
};
