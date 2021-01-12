import actions from '@actions';
const { getDataButton: { SHOW_GET_DATA_BUTTON } } = actions;

export default {
    showGetDataButton: show => ({ type: SHOW_GET_DATA_BUTTON, payload: show }),
};