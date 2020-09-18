import React from "react";
import './style.css';
import { connect } from 'react-redux';

import Button from "../button";
import {togglePersonInfoBlock} from "../../../store/actions/action-creators";

const personInfoScreen = ({ personInfoScreen: { show, person: { email, gender, name, surname, photo } }, dispatch }) => (
    <div className={ `person-info-screen-block-standard person-info-screen-block-${ show ? 'show' : 'hidden' }` }>
        <div className='person-info-wrap-standard'>
            <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
            <div className='person-fio-wrap-standard'>
                <p>{ name }</p>
                &nbsp; &nbsp; &nbsp;
                <p>{ surname }</p>
            </div>
            <h3 className='person-info-gender-standard'>{ gender }</h3>
            <p className='person-info-email-standard'>{ email }</p>
            <Button label='закрыть' click={() => { dispatch(togglePersonInfoBlock(false)) }} />
        </div>
    </div>
);

export default connect(state => state)(personInfoScreen);
