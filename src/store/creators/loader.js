import actions from '@actions';
const { loader: { TOGGLE_LOADER } } = actions;

export const toggleLoader = status => ({ type: TOGGLE_LOADER, payload: status });