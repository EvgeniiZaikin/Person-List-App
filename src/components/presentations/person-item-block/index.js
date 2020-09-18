import React from "react";
import './style.css';
import { connect } from 'react-redux';
import { setPersonInfo, togglePersonInfoBlock } from '../../../store/actions/action-creators';

import Button from '../button';

const openCurrentPerson = (dispatch, person) => {
    dispatch(setPersonInfo(person));
    dispatch(togglePersonInfoBlock(true));
};

const personItemBlock = ({ email, gender, name, surname, photo, dispatch }) => (
    <div>
        <div className='person-block-standard'>
            <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
            <div className='person-fio-standard'>
                <p>{ name }</p>
                <p>{ surname }</p>
            </div>
            <h3>{ gender }</h3>
            <p className='person-email-standard'>{ email }</p>
            <Button label='подробнее' click={ openCurrentPerson.bind(this, dispatch, { email, gender, name, surname, photo }) } />
        </div>
    </div>
);

export default connect(state => state)(personItemBlock);
