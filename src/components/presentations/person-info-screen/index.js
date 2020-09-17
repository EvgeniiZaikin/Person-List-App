import React from "react";
import './style.css';
import { connect } from 'react-redux';

import Button from "../button";
import {togglePersonInfoBlock} from "../../../store/actions/action-creators";

const personInfoScreen = ({ email, gender, name, surname, photo, personInfoScreen: { show }, dispatch }) => (
    <div className={ `person-info-screen-block-standard person-info-screen-block-${ show ? 'show' : 'hidden' }` }>
        <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
        <div>
            <p>{ name }</p>
            <p>{ surname }</p>
        </div>
        <h3>{ gender }</h3>
        <p>{ email }</p>
        <Button label='закрыть' click={() => { dispatch(togglePersonInfoBlock(false)) }} />
    </div>
);

export default connect(state => state)(personInfoScreen);
