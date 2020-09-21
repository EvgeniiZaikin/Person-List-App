import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const countPeopleInput = ({ change, defaultValue }) => (
    <div className='set-count-people'>
        <label>Введите количество человек: &nbsp;</label>
        <input
            defaultValue={ defaultValue }
            onChange={ event => change(event.target.value) } />
    </div>
);

export default countPeopleInput;

countPeopleInput.propTypes = {
    change: PropTypes.func.isRequired,
    defaultValue: PropTypes.number.isRequired,
};
