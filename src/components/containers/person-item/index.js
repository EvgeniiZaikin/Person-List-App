import React from "react";
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../presentations/button';
import creators from '@creators';

const { personInfo: { setPersonInfo, togglePersonInfoBlock } } = creators;

const personItem = ({ person, setInfo, showInfo }) => {
    const showPersonInfo = () => {
        setInfo(person);
        showInfo();
    };

    const { name, surname, photo } = person;

    return (
        <div>
            <div className='person-item-block'>
                <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
                <Button label='подробнее' click={ showPersonInfo } />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    const setInfo = person => dispatch(setPersonInfo(person));
    const showInfo = () => dispatch(togglePersonInfoBlock(true));
    return { setInfo, showInfo };
};

export default connect(null, mapDispatchToProps)(personItem);

personItem.propTypes = {
    setInfo: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired,
    person: PropTypes.objectOf(PropTypes.string).isRequired,
};
