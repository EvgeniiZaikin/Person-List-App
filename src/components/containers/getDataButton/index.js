import React from "react";
import { connect } from "react-redux";
import { Button } from "../../presentations";
import { setPersonList, toggleLoader } from "../../../store/actions/action-creators";
import PropTypes from 'prop-types';

const getData = (dispatch, countPeople) => {
    dispatch(toggleLoader(true));
    dispatch(setPersonList(countPeople));
};

const getDataButton = ({ dispatch, getDataButton: { show }, countPeople }) => (
    <>
        {
            show && <Button click={ getData.bind(null, dispatch, countPeople) } label='получить данные' />
        }
    </>
);

export default connect(state => state)(getDataButton);

getDataButton.propTypes = {
    dispatch: PropTypes.func.isRequired,
    getDataButton: PropTypes.shape({
        show: PropTypes.bool.isRequired,
    }),
    countPeople: PropTypes.number.isRequired,
};
