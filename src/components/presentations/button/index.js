import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const button = ({ label, click }) => <button className='all-button-standard' onClick={ click }>{ label }</button>;

export default button;

button.propsTypes = {
    label: PropTypes.string,
    click: PropTypes.func,
};
