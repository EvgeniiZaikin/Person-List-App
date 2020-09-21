import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const _checkDigit = event => {
    const keyCode = event.keyCode || event.which;
    if (keyCode <= 48 || keyCode >= 57) {
        event.preventDefault();
    }
};

const countPeopleInput = ({ change, defaultValue }) => (
    <div className='set-count-people'>
        <label>Введите количество человек: &nbsp;</label>
        <input
            defaultValue={ defaultValue }
            onChange={ event => change(event.target.value) }
            onKeyPress={ event => _checkDigit(event) } />
    </div>
);

export default countPeopleInput;

countPeopleInput.propTypes = {
    change: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
};
