import actions from '@actions';
const { personInfo: { SET_PERSON_INFO, SHOW_PERSON_INFO_BLOCK } } = actions;

const initialState = {
    show: false,
    person: {
        photo: '',
        gender: '',
        name: '',
        surname: '',
        email: '',
    },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_PERSON_INFO_BLOCK:
            return { ...state, show: payload };
        case SET_PERSON_INFO:
            return { ...state, person: payload };
        default:
            return { ...state };
    }
};
