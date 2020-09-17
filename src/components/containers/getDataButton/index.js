import React from "react";
import { connect } from "react-redux";
import { Button } from "../../presentations";
import { setPersonList, toggleLoader } from "../../../store/actions/action-creators";

const getData = dispatch => {
    console.log('method getData start');
    dispatch(toggleLoader(true));
    dispatch(setPersonList());
};

const getDataButton = ({ dispatch, getDataButton: { show } }) => (
    <>
        {
            show && <Button click={ getData.bind(null, dispatch) } label='получить данные' />
        }
    </>
);

export default connect(state => state)(getDataButton);
