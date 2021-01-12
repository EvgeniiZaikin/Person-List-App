import React from "react";
import { connect } from "react-redux";
import { Button } from "../../presentations";
import PropTypes from 'prop-types';
import { setPersonList } from '../../../store/creators/person-list';
import { toggleLoader } from '../../../store/creators/loader';

const getDataButton = ({ show, countPeople, showLoader, setPersonListInfo }) => {
    const getData = () => {
        showLoader(); 
        setPersonListInfo(countPeople);
    };

    return (
        <>
            {
                show && 
                <Button 
                    click={ getData } 
                    label='получить данные' 
                />
            }
        </> 
    );
};

const mapStateToProps = state => {
    const { getDataButton: { show } } = state;
    return { show };
};

const mapDispatchToProps = dispatch => {
    const showLoader = () => dispatch(toggleLoader(true));
    const setPersonListInfo = countPeople => dispatch(setPersonList(countPeople));
    return { showLoader, setPersonListInfo };
};

export default connect(mapStateToProps, mapDispatchToProps)(getDataButton);

getDataButton.propTypes = {
    showLoader: PropTypes.func.isRequired,
    setPersonListInfo: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    countPeople: PropTypes.number.isRequired,
};
