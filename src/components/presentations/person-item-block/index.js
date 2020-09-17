import React from "react";
import './style.css';

export default ({ email, gender, name, surname, photo }) => (
    <div>
        <div className='person-block-standard'>
            <img src={ photo } alt={ `Name: ${ name }. Surname: ${ surname }` } />
            <div className='person-fio-standard'>
                <p>{ name }</p>
                <p>{ surname }</p>
            </div>
            <h3>{ gender }</h3>
            <p className='person-email-standard'>{ email }</p>
        </div>
    </div>
);
