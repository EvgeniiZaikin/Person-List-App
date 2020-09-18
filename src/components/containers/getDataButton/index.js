import React from "react";
import { connect } from "react-redux";
import { Button } from "../../presentations";
import { setPersonList, toggleLoader } from "../../../store/actions/action-creators";
import PropTypes from 'prop-types';

const getData = dispatch => {
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

getDataButton.propTypes = {
    dispatch: PropTypes.func,
};
