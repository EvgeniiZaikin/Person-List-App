import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Presentations from '@presentations';
import creators from '@creators';

const { personInfo: { togglePersonInfoBlock } } = creators;

const personInfoScreen = ({ show, email, gender, name, surname, photo, hideInfo }) => (
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
            <Presentations.Button label='закрыть' click={ hideInfo } />
        </div>
    </div>
);

const mapStateToProps = state => {
    const { personInfo: { show, person: { email, gender, name, surname, photo } } } = state;
    return { show, email, gender, name, surname, photo };
};

const mapDispatchToProps = dispatch => {
    const hideInfo = () => dispatch(togglePersonInfoBlock(false));
    return { hideInfo };
};

export default connect(mapStateToProps, mapDispatchToProps)(personInfoScreen);

personInfoScreen.propTypes = {
    hideInfo: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};
