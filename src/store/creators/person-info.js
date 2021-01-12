import actions from '@actions';
const { personInfo: { SET_PERSON_INFO, SHOW_PERSON_INFO_BLOCK } } = actions;

export const setPersonInfo = info => ({ type: SET_PERSON_INFO, payload: info });
export const togglePersonInfoBlock = show => ({ type: SHOW_PERSON_INFO_BLOCK, payload: show });