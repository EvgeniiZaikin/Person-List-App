import React from "react";
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from "../../presentations/button";
import {togglePersonInfoBlock} from "../../../store/creators/person-info";

const personInfoScreen = ({ personInfo: { show, person: { email, gender, name, surname, photo } }, dispatch }) => (
    <div className={ `person-info__block person-info__block_${ show ? 'visible' : 'hidden' }` }>
        <div className='person-info__wrap'>
            <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
            <div className='person-info__fio-block'>
                <p>{ name }</p>
                &nbsp; &nbsp; &nbsp;
                <p>{ surname }</p>
            </div>
            <h3 className='person-info__gender'>{ gender }</h3>
            <p className='person-info__email'>{ email }</p>
            <Button label='закрыть' click={() => { dispatch(togglePersonInfoBlock(false)) }} />
        </div>
    </div>
);

export default connect(state => state)(personInfoScreen);

personInfoScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    personInfoScreen: PropTypes.shape({
        show: PropTypes.bool.isRequired,
        person: PropTypes.shape({
            email: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
        }),
    }),
};
