import { TOGGLE_LOADER } from '../actions/loader';

export const toggleLoader = status => ({ type: TOGGLE_LOADER, payload: status });