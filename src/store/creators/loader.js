import actions from '@actions';
const { loader: { TOGGLE_LOADER } } = actions;

export default {
    toggleLoader: status => ({ type: TOGGLE_LOADER, payload: status }),
};