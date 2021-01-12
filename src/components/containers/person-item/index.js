import React from "react";
import './style.css';
import { connect } from 'react-redux';
import { setPersonInfo, togglePersonInfoBlock } from '../../../store/creators/person-info';
import PropTypes from 'prop-types';

import Button from '../../presentations/button';

const openCurrentPerson = (dispatch, person) => {
    dispatch(setPersonInfo(person));
    dispatch(togglePersonInfoBlock(true));
};

const personItemBlock = ({ person, dispatch }) => (
    <div>
        <div className='person-item-block'>
            <img src={ person.photo } alt={ `Name: ${ person.name }. Surname: ${ person.surname }` } />
            <Button label='подробнее' click={ openCurrentPerson.bind(this, dispatch, person) } />
        </div>
    </div>
);

export default connect(state => state)(personItemBlock);

personItemBlock.propTypes = {
    dispatch: PropTypes.func.isRequired,
    person: PropTypes.objectOf(PropTypes.string).isRequired,
};
