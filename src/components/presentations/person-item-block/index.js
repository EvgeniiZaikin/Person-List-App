import React from "react";
import './style.css';
import { connect } from 'react-redux';
import { setPersonInfo, togglePersonInfoBlock } from '../../../store/actions/action-creators';

import Button from '../button';

const openCurrentPerson = (dispatch, person) => {
    dispatch(setPersonInfo(person));
    dispatch(togglePersonInfoBlock(true));
};

const personItemBlock = ({ person, dispatch }) => (
    <div>
        <div className='person-block-standard'>
            <img src={ person.photo } alt={ `Name: ${ person.name }. Surname: ${ person.surname }` } />
            <Button label='подробнее' click={ openCurrentPerson.bind(this, dispatch, person) } />
        </div>
    </div>
);

export default connect(state => state)(personItemBlock);
