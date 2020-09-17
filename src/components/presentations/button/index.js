import React from 'react';
import './style.css';

export default ({ label, click }) => <button className='all-button-standard' onClick={ click }>{ label }</button>;
